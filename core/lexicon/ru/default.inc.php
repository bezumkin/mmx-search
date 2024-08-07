<?php

$_tmp = [
    'menu_name' => 'mmxSearch',
    'menu_desc' => 'Удобный поиск',
    'version' => [
        'available' => 'доступна {version}',
    ],
    'actions' => [
        'create' => 'Создать',
        'edit' => 'Изменить',
        'submit' => 'Отправить',
        'cancel' => 'Отмена',
        'delete' => 'Удалить',
    ],
    'models' => [
        'index' => [
            'title_one' => 'Индекс',
            'title_many' => 'Индексы',
            'id' => 'Id',
            'title' => 'Название',
            'prefix' => 'Неполное вхождение',
            'prefix_desc' => 'Поиск по неполному вхождению, например "мото" надёт "мотоцикл".',
            'fuzzy' => 'Нечеткий поиск',
            'fuzzy_desc' => 'В этом примере используется нечеткий поиск с максимальным расстоянием редактирования 0.2 * длина термина, округленная до ближайшего целого числа. Слово "ismael", написанное с ошибкой, будет соответствовать слову "ishmael".',
            'context_key' => 'Контекст',
            'active' => 'Активно',
            'fields' => 'Поля ресурсов',
            'field' => 'Поле ресурса',
            'field_desc' => 'Укажите поле ресурса или имя TV с указанием поискового веса.',
            'weight' => 'Вес поля',
            'created_at' => 'Создано',
            'updated_at' => 'Изменено',
        ],
        'index_resource' => [
            'title_one' => 'Поле индекса',
            'title_many' => 'Поля индекса',
            'resource' => 'Ресурс',
            'field' => 'Поле',
            'value' => 'Содержимое',
            'created_at' => 'Создано',
            'updated_at' => 'Изменено',
        ],
    ],
    'components' => [
        'no_data' => 'Нет данных для вывода',
        'no_results' => 'Результатов не найдено',
        'records' => 'Записей нет | {total} запись | {total} записи | {total} записей',
        'query' => 'Поиск...',
        'delete' => [
            'title' => 'Требуется подтверждение',
            'confirm' => 'Вы уверены, что хотите удалить эту запись?',
        ],
    ],
    'search' => [
        'title' => 'Поиск',
        'reset' => 'Сброс',
        'close' => 'Закрыть',
        'to_navigate' => 'навигация',
        'to_select' => 'выбрать',
        'to_close' => 'закрыть',
    ],
    'snippets' => [
        'index' => 'Имя поискового индекса',
        'tplbtn' => 'Имя чанка для вывода кнопки поиска',
        'nocss' => 'Не загружать собранный CSS',
    ],
    'errors' => [
        'item' => [
            'title_unique' => 'Заголовок предмета должен быть уникальным.',
        ],
    ],
];

/** @var array $_lang */
$_lang = array_merge($_lang, MMX\Search\App::prepareLexicon($_tmp, MMX\Search\App::NAMESPACE));

$_tmp = [
    'some-setting' => 'Какая-то настройка',
    'some-setting_desc' => 'Описание какой-то настройки',
];
$_lang = array_merge($_lang, MMX\Search\App::prepareLexicon($_tmp, 'setting_' . MMX\Search\App::NAMESPACE));

unset($_tmp);