<?php

declare(strict_types=1);

use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

final class IndexResources extends AbstractMigration
{
    public function up(): void
    {
        $schema = Manager::schema();
        $schema->create(
            'mmx_search_resources',
            static function (Blueprint $table) {
                $table->foreignId('index_id')
                    ->constrained('mmx_search_indexes')->cascadeOnDelete();
                $table->unsignedInteger('resource_id');
                $table->unsignedInteger('parent_id')->nullable();
                $table->string('field', 100);
                $table->text('value')->nullable();
                $table->timestamps();

                $table->primary(['index_id', 'resource_id', 'field']);
                $table->foreign('resource_id')
                    ->references('id')
                    ->on('site_content')
                    ->cascadeOnDelete();
                $table->foreign('parent_id')
                    ->references('id')
                    ->on('site_content')
                    ->nullOnDelete();
            }
        );
    }

    public function down(): void
    {
        $schema = Manager::schema();
        $schema->drop('mmx_search_resources');
    }
}
