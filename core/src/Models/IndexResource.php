<?php

namespace MMX\Search\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use MMX\Database\Models\Resource;
use MMX\Database\Models\Traits\CompositeKey;

/**
 * @property int $index_id
 * @property int $resource_id
 * @property ?int $parent_id
 * @property string $field
 * @property ?string $value
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read Index $index
 * @property-read Resource $resource
 * @property-read Resource $parent
 */
class IndexResource extends Model
{
    use CompositeKey;

    protected $table = 'mmx_search_resources';
    protected $guarded = ['created_at', 'updated_at'];
    protected $primaryKey = ['index_id', 'resource_id', 'field'];

    public function index(): BelongsTo
    {
        return $this->belongsTo(Index::class);
    }

    public function resource(): BelongsTo
    {
        return $this->belongsTo(Resource::class);
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Resource::class);
    }
}