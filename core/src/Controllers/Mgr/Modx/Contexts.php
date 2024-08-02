<?php

namespace MMX\Search\Controllers\Mgr\Modx;

use Illuminate\Database\Eloquent\Builder;
use MMX\Database\Models\Context;
use Vesp\Controllers\ModelGetController;

class Contexts extends ModelGetController
{
    protected string $model = Context::class;
    protected string|array $primaryKey = 'key';

    protected function beforeCount(Builder $c): Builder
    {
        $c->where('key', '!=', 'mgr');

        if ($query = trim($this->getProperty('query', ''))) {
            $c->where(static function (Builder $c) use ($query) {
                $c->where('name', 'LIKE', "%$query%");
                $c->orWhere('key', 'LIKE', "%$query%");
            });
        }

        return $c;
    }
}