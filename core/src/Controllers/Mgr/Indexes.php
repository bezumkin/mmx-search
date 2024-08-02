<?php

namespace MMX\Search\Controllers\Mgr;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use MMX\Database\Models\Resource;
use MMX\Search\Models\Index;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\ModelController;

class Indexes extends ModelController
{
    protected string $model = Index::class;

    protected function beforeCount(Builder $c): Builder
    {
        if ($query = trim($this->getProperty('query', ''))) {
            $c->where('title', 'LIKE', "%$query%");
        }

        return $c;
    }

    protected function beforeSave(Model $record): ?ResponseInterface
    {
        /** @var Index $record */
        if ($record->newQuery()->where('title', $record->title)->where('id', '!=', $record->id)->exists()) {
            return $this->failure('errors.index.title_unique');
        }

        return null;
    }

    public function post(): ResponseInterface
    {
        $id = $this->getPrimaryKey();
        /** @var Index $index */
        if (!$id || !$index = Index::query()->find($id)) {
            return $this->failure('Not Found', 404);
        }

        $offset = $this->getProperty('offset', 0);
        if (!$offset) {
            $index->resources()->delete();
        }

        $resources = Resource::query()
            ->where('context_key', $index->context_key)
            ->where('searchable', true)
            ->where('deleted', false)
            ->where('published', true)
            ->with('TvValues', 'TvValues.Tv:id,name');
        $count = $resources->count();
        $resources->offset($offset);
        $resources->limit(1);

        /** @var Resource $resource */
        $indexed = 0;
        foreach ($resources->get() as $resource) {
            $index->indexResource($resource);
            $indexed++;
        }

        return $this->success([
            'total' => $count,
            'indexed' => $indexed,
        ]);
    }
}