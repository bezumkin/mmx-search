<?php

$_tmp = [
    'menu_name' => 'mmxSearch',
    'menu_desc' => 'Bequeme Suche',
    'version' => [
        'available' => '{version} verfügbar',
    ],
    'actions' => [
        'create' => 'Erstellen',
        'edit' => 'Bearbeiten',
        'submit' => 'Einreichen',
        'cancel' => 'Stornieren',
        'delete' => 'Löschen',
        'select_context' => 'Wählen Sie Kontext aus',
    ],
    'models' => [
        'index' => [
            'title_one' => 'Index',
            'title_many' => 'Indizes',
            'id' => 'Id',
            'title' => 'Titel',
            'prefix' => 'Präfixsuche',
            'prefix_desc' => 'Präfixsuche (damit „moto“ mit „motorcycle“ übereinstimmt).',
            'fuzzy' => 'Fuzzy-Suche',
            'fuzzy_desc' => 'Fuzzy-Suche, in diesem Beispiel, mit einem maximalen Bearbeitungsabstand von 0,2 Begriffslängen, gerundet auf die nächste ganze Zahl. Das falsch geschriebene „ismael“ wird mit „ishmael“ übereinstimmen.',
            'context_key' => 'Kontext',
            'context_keys' => 'Kontexte',
            'active' => 'Aktiv',
            'fields' => 'Indexfelder',
            'field' => 'Ressourcenfeld',
            'field_desc' => 'Bitte geben Sie den Namen des Ressourcenfelds oder der Vorlagenvariablen mit der Suchgewichtung ein.',
            'weight' => 'Feldgewicht',
            'created_at' => 'Hergestellt in',
            'updated_at' => 'Aktualisiert am',
        ],
        'index_resource' => [
            'title_one' => 'Indiziertes Feld',
            'title_many' => 'Indizierte Felder',
            'resource' => 'Ressource',
            'field' => 'Feld',
            'value' => 'Inhalt',
            'created_at' => 'Hergestellt in',
            'updated_at' => 'Aktualisiert am',
        ],
    ],
    'components' => [
        'no_data' => 'Nichts anzuzeigen',
        'no_results' => 'Nichts gefunden',
        'records' => 'Keine Aufzeichnungen | 1 Datensatz | {total} aufzeichnungen',
        'query' => 'Suche...',
        'delete' => [
            'title' => 'Bestätigung erforderlich',
            'confirm' => 'Sind Sie sicher, dass Sie diesen Eintrag löschen möchten?',
        ],
    ],
    'search' => [
        'title' => 'Suche',
        'reset' => 'Zurücksetzen',
        'close' => 'Schließen',
        'to_navigate' => 'navigieren',
        'to_select' => 'zu wählen',
        'to_close' => 'schließen',
    ],
    'snippets' => [
        'index' => 'Der Name des Suchindex',
        'tplbtn' => 'Der Name des Blocks mit Suchschaltfläche',
        'nocss' => 'Laden Sie keine Frontend-Stile',
    ],
];

/** @var array $_lang */
$_lang = array_merge($_lang, MMX\Search\App::prepareLexicon($_tmp, MMX\Search\App::NAMESPACE));

$_tmp = [
//    'some-setting' => 'Titel festlegen',
//    'some-setting_desc' => 'Einige Einstellungsbeschreibungen',
];
$_lang = array_merge($_lang, MMX\Search\App::prepareLexicon($_tmp, 'setting_' . MMX\Search\App::NAMESPACE));

unset($_tmp);