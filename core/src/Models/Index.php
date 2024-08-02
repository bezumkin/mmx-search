<?php

namespace MMX\Search\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use MMX\Database\Models\Context;
use MMX\Database\Models\Resource;

/**
 * @property int $id
 * @property int $title
 * @property array $fields
 * @property bool $prefix
 * @property float $fuzzy
 * @property string $context_key
 * @property bool $active
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read Context $context
 * @property-read IndexResource[] $resources
 */
class Index extends Model
{
    protected $table = 'mmx_search_indexes';
    protected $guarded = ['created_at', 'updated_at'];
    protected $casts = [
        'fields' => 'array',
        'prefix' => 'bool',
        'fuzzy' => 'float',
        'active' => 'bool',
    ];

    public function context(): BelongsTo
    {
        return $this->belongsTo(Context::class, 'key', 'context_key');
    }

    public function resources(): HasMany
    {
        return $this->hasMany(IndexResource::class, 'index_id');
    }

    public function reIndex(): void
    {
        $this->resources()->delete();

        $resources = Resource::query()
            ->where('context_key', $this->context_key)
            ->where('searchable', true)
            ->where('deleted', false)
            ->where('published', true)
            ->with('Tvs')
            ->get();
        /** @var Resource $resource */
        foreach ($resources as $resource) {
            $this->indexResource($resource);
        }
    }

    public function indexResource(Resource $resource): void
    {
        $pk = ['index_id' => $this->id, 'resource_id' => $resource->id];
        foreach ($this->fields as $row) {
            $pk['field'] = $row['field'];
            $array = $resource->toArray();
            $value = '';
            if (array_key_exists($row['field'], $array)) {
                $value = $array[$row['field']];
            } elseif (!empty($array['tv_values'])) {
                foreach ($array['tv_values'] as $tv) {
                    if (strtolower($tv['tv']['name']) === strtolower($row['field'])) {
                        $value = $tv['value'];
                    }
                }
            }

            if (!empty($value) && $value = $this::sanitize($value)) {
                $record = new IndexResource($pk);
                if ($resource->parent) {
                    $record->parent_id = $resource->parent;
                }
                $record->value = $value;
                $record->save();
            }
        }
    }

    protected static function sanitize(string $value): string
    {
        $value = html_entity_decode($value);
        $value = strip_tags($value);
        $value = preg_replace('/\[\[([^\[\]]++|(?R))*?]]/', '', $value);
        $value = preg_replace('#([\r\n\s])+#', ' ', $value);

        return trim($value);
    }
}