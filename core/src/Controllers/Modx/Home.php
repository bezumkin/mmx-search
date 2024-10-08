<?php

namespace MMX\Search\Controllers\Modx;

use MMX\Search\App;
use MODX\Revolution\modExtraManagerController;

class Home extends modExtraManagerController
{
    public function loadCustomCssJs(): void
    {
        App::registerAssets($this);
    }

    public function getPageTitle(): string
    {
        return App::NAME;
    }

    public function getLanguageTopics(): array
    {
        return [App::NAMESPACE . ':default'];
    }

    public function getTemplateFile(): string
    {
        /** @var App $app */
        $app = $this->modx->services->get(App::NAME);
        $locale = $this->modx->getOption('manager_language', $_SESSION, $this->modx->getOption('cultureKey')) ?: 'en';
        $data = [
            'locale' => $locale,
            'lexicon' => $app->getLexicon($locale),
        ];
        $this->content .= '<div id="' . App::NAMESPACE . '-root" class="mmx-search"></div>';
        $this->content .= '<script>' . App::NAME . '=' . json_encode($data) . '</script>';

        return '';
    }
}