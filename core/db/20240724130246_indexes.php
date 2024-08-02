<?php

declare(strict_types=1);

use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

final class Indexes extends AbstractMigration
{
    public function up(): void
    {
        $schema = Manager::schema();
        $schema->create(
            'mmx_search_indexes',
            static function (Blueprint $table) {
                $table->id();
                $table->string('title')->unique();
                $table->json('fields');
                $table->boolean('prefix')->default(true);
                $table->float('fuzzy', 3)->default(0.2);
                $table->string('context_key');
                $table->boolean('active')->default(true);
                $table->timestamps();
            }
        );
    }

    public function down(): void
    {
        $schema = Manager::schema();
        $schema->drop('mmx_search_indexes');
    }
}
