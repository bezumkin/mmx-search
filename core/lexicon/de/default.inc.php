<?php

$_tmp = [
    'menu_name' => 'mmxSearch',
    'menu_desc' => 'Komfortable Suche',
    'version' => [
        'available' => 'Version {version} verfügbar',
    ],
    'actions' => [
        'create' => 'Erstellen',
        'edit' => 'Bearbeiten',
        'submit' => 'Abschicken',
        'cancel' => 'Abbrechen',
        'delete' => 'Löschen',
        'select_context' => 'Wählen Sie einen Kontext aus',
    ],
    'models' => [
        'index' => [
            'title_one' => 'Index',
            'title_many' => 'Indizes',
            'id' => 'Id',
            'title' => 'Titel',
            'prefix' => 'Präfixsuche',
            'prefix_desc' => 'Präfixsuche (dann findet „moto“ auch „motorcycle“ übereinstimmt).',
            'fuzzy' => 'Unscharf-Suche',
            'fuzzy_desc' => 'Unscharf-Suche, in diesem Beispiel, mit einem maximalen Bearbeitungsabstand von 0,2 Begriffslängen, gerundet auf die nächste ganze Zahl. Das falsch geschriebene „ismael“ wird mit „ishmael“ übereinstimmen.',
            'context_key' => 'Kontext',
            'context_keys' => 'Kontexte',
            'active' => 'Aktiv',
            'fields' => 'Indexfelder',
            'field' => 'Ressourcenfeld',
            'field_desc' => 'Bitte geben Sie den Namen des Ressourcenfelds oder der Template-Variablen mit der Suchgewichtung ein.',
            'weight' => 'Feldgewicht',
            'created_at' => 'Erstallt am',
            'updated_at' => 'Aktualisiert am',
        ],
        'index_resource' => [
            'title_one' => 'Indiziertes Feld',
            'title_many' => 'Indizierte Felder',
            'resource' => 'Ressource',
            'field' => 'Feld',
            'value' => 'Inhalt',
            'created_at' => 'Erstellt am',
            'updated_at' => 'Aktualisiert am',
        ],
    ],
    'components' => [
        'no_data' => 'Keine Resultate',
        'no_results' => 'Nichts gefunden',
        'records' => 'Keine Einträge | 1 Datensatz | {total} Einträge',
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
        'to_select' => 'auszuwählen',
        'to_close' => 'schließen',
    ],
    'snippets' => [
        'index' => 'Der Name des Suchindexes',
        'tplbtn' => 'Der Name des Blocks mit Suchschaltfläche',
        'nocss' => 'Keine Frontend-Styles (CSS) laden',
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