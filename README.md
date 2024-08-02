Search for MODX 3
---

> This extra is part of **MMX** initiative - the **M**odern **M**OD**X** approach.

### Dependencies

This package requires [mmxDatabase][mmx-database] to work with MODX database using Eloquent models.

The `mmx/database` dependency will be downloaded automatically by Composer.

### Prepare

This package can be installed only with Composer.

If you are still not using Composer with MODX 3, just download the `composer.json` of your version:
```bash
cd /to/modx/root/
wget https://raw.githubusercontent.com/modxcms/revolution/v3.0.5-pl/composer.json
```

### Install

```bash
composer require mmx/search --update-no-dev
composer exec mmx-search install
```

### Update

```bash
composer update mmx/search --no-dev
composer exec mmx-search install
```

### Remove

```bash
composer exec mmx-search remove
composer remove mmx/search
```

If you don't want to use mmxDatabase, you can also remove it.
```bash
composer exec mmx-database remove && composer remove mmx/database
```

### How to use

1. Open **mmxSearch** extra section in manager.
2. Create new search index with unique `title`, for example `Test`.
3. Index resource with `refresh` button.
4. Call `mmxSearch` snippet with specifying the title of index:
```
[[!mmxSearch?index=`test`]]
```

You can specify `tplBtn` parameter with chunk for search button.
Another parameter `noCSS` will disable loading of built styles.


[mmx-database]: https://packagist.org/packages/mmx/database

