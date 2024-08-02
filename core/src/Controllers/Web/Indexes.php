<?php

namespace MMX\Search\Controllers\Web;

use Illuminate\Database\Capsule\Manager;
use MMX\Search\Models\Index;
use MODX\Revolution\modX;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\ModelGetController;

class Indexes extends ModelGetController
{
    protected string $model = Index::class;
    protected modX $modx;
    protected ?Index $index = null;

    public function __construct(Manager $eloquent, modX $modx)
    {
        parent::__construct($eloquent);
        $this->modx = $modx;
    }

    public function checkScope(string $method): ?ResponseInterface
    {
        if ($method === 'options') {
            return null;
        }

        $title = $this->getProperty('title');
        if (!$title || !$this->index = Index::query()->where('title', $title)->first()) {
            return $this->failure('Search Index Not Found', 404);
        }
        if (!$this->index->active && (!$this->modx->user || !$this->modx->user->hasSessionContext('mgr'))) {
            return $this->failure('Search Index Not Found', 404);
        }

        return null;
    }

    public function get(): ResponseInterface
    {
        $data = $this->index->only('id', 'title', 'fields', 'boost', 'prefix', 'fuzzy');
        $data['pages'] = $this->index->resources()
            ->select('resource_id', 'parent_id', 'field', 'value')
            ->with('Resource:id,pagetitle,menutitle,uri')
            ->with('Parent:id,pagetitle,menutitle')
            ->get()
            ->toArray();

        return $this->success($data);
    }

}