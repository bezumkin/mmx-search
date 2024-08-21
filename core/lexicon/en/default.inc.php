<?php

$_tmp = [
    'menu_name' => 'mmxSearch',
    'menu_desc' => 'Convenient search',
    'version' => [
        'available' => '{version} available',
    ],
    'actions' => [
        'create' => 'Create',
        'edit' => 'Edit',
        'submit' => 'Submit',
        'cancel' => 'Cancel',
        'delete' => 'Delete',
        'select_context' => 'Select Context',
    ],
    'models' => [
        'index' => [
            'title_one' => 'Index',
            'title_many' => 'Indexes',
            'id' => 'Id',
            'title' => 'Title',
            'prefix' => 'Prefix Search',
            'prefix_desc' => 'Prefix search (so that "moto" will match "motorcycle").',
            'fuzzy' => 'Fuzzy Search',
            'fuzzy_desc' => 'Fuzzy search, in this example, with a max edit distance of 0.2 * term length, rounded to nearest integer. The misspelled "ismael" will match "ishmael".',
            'context_key' => 'Context',
            'context_keys' => 'Contexts',
            'active' => 'Active',
            'fields' => 'Index Fields',
            'field' => 'Resource Field',
            'field_desc' => 'Please enter resource field or Template Variable name with search weight.',
            'weight' => 'Field Weight',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ],
        'index_resource' => [
            'title_one' => 'Indexed Field',
            'title_many' => 'Indexed Fields',
            'resource' => 'Resource',
            'field' => 'Field',
            'value' => 'Content',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ],
    ],
    'components' => [
        'no_data' => 'Nothing to display',
        'no_results' => 'Nothing found',
        'records' => 'No records | 1 record | {total} records',
        'query' => 'Search...',
        'delete' => [
            'title' => 'Confirmation required',
            'confirm' => 'Are you sure you want to delete this entry?',
        ],
    ],
    'search' => [
        'title' => 'Search',
        'reset' => 'Reset',
        'close' => 'Close',
        'to_navigate' => 'to navigate',
        'to_select' => 'to select',
        'to_close' => 'to close',
    ],
    'snippets' => [
        'index' => 'The name of search index',
        'tplbtn' => 'The name of chunk with search button',
        'nocss' => 'Do not load frontend styles',
    ],
];

/** @var array $_lang */
$_lang = array_merge($_lang, MMX\Search\App::prepareLexicon($_tmp, MMX\Search\App::NAMESPACE));

$_tmp = [
//    'some-setting' => 'Setting title',
//    'some-setting_desc' => 'Some setting description',
];
$_lang = array_merge($_lang, MMX\Search\App::prepareLexicon($_tmp, 'setting_' . MMX\Search\App::NAMESPACE));

unset($_tmp);