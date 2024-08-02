<?php

namespace MMX\Search\Controllers\Mgr;

use Illuminate\Database\Eloquent\Builder;
use MMX\Search\Models\Index;
use MMX\Search\Models\IndexResource;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\ModelGetController;

class IndexResources extends ModelGetController
{
    protected string $model = IndexResource::class;
    protected ?Index $index = null;

    public function checkScope(string $method): ?ResponseInterface
    {
        $id = $this->getProperty('index_id');
        if (!$id || !$this->index = Index::query()->find($id)) {
            return $this->failure('Not Found', 404);
        }

        return parent::checkScope($method);
    }

    protected function beforeCount(Builder $c): Builder
    {
        $c->where('index_id', $this->index->id);

        if ($field = $this->getProperty('field')) {
            $c->where('field', $field);
        }

        if ($query = $this->getProperty('query')) {
            $c->where('value', 'LIKE', "%$query%");
        }

        return $c;
    }

    protected function afterCount(Builder $c): Builder
    {
        return $c->with('Resource:id,pagetitle');
    }

    protected function addSorting(Builder $c): Builder
    {
        if ($this->getProperty('sort') === 'resource') {
            return $c->orderBy('resource_id', $this->getProperty('dir') === 'desc' ? 'desc' : 'asc');
        }

        return parent::addSorting($c);
    }
}