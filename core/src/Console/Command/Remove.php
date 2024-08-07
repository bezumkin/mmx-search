<?php

namespace MMX\Search\Console\Command;

use MMX\Search\App;
use MMX\Database\Models\Category;
use MMX\Database\Models\Menu;
use MMX\Database\Models\Namespaces;
use MMX\Database\Models\Plugin;
use MMX\Database\Models\PluginEvent;
use MMX\Database\Models\Snippet;
use MMX\Database\Models\SystemSetting;
use MODX\Revolution\modX;
use Phinx\Console\PhinxApplication;
use Phinx\Wrapper\TextWrapper;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class Remove extends Command
{
    protected static $defaultName = 'remove';
    protected static $defaultDescription = 'Remove mmxSearch from MODX 3 and delete its data along with tables';
    protected modX $modx;

    public function __construct(modX $modx, ?string $name = null)
    {
        parent::__construct($name);
        $this->modx = $modx;
    }

    public function run(InputInterface $input, OutputInterface $output): void
    {
        $srcPath = MODX_CORE_PATH . 'vendor/' . preg_replace('#-#', '/', App::NAMESPACE, 1);
        $corePath = MODX_CORE_PATH . 'components/' . App::NAMESPACE;
        $assetsPath = MODX_ASSETS_PATH . 'components/' . App::NAMESPACE;

        if ($namespace = Namespaces::query()->find(App::NAMESPACE)) {
            /** @var Namespaces $namespace */
            $namespace->delete();
            $output->writeln('<info>Removed namespace "' . $namespace->name . '"</info>');
        }

        if ($menu = Menu::query()->where('namespace', App::NAMESPACE)->first()) {
            /** @var Menu $menu */
            $menu->delete();
            $output->writeln('<info>Removed menu "' . $menu->text . '"</info>');
        }

        if ($category = Category::query()->where('category', App::NAME)->first()) {
            /** @var Category $category */
            $category->delete();
            $output->writeln('<info>Removed category "' . $category->category . '"</info>');
        }

        foreach (SystemSetting::query()->where('namespace', App::NAMESPACE)->cursor() as $setting) {
            /** @var SystemSetting $setting */
            $setting->delete();
            $output->writeln('<info>Removed system setting "' . $setting->key . '"</info>');
        }

        if ($plugin = Plugin::query()->where('name', App::NAME)->first()) {
            /** @var Plugin $plugin */
            foreach ($plugin->Events()->cursor() as $event) {
                /** @var PluginEvent $event */
                $event->delete();
                $output->writeln(
                    '<info>Removed event "' . $event->event . '" from plugin "' . $plugin->name . '"</info>'
                );
            }
            $plugin->delete();
            $output->writeln('<info>Removed plugin "' . $plugin->name . '"</info>');
        }

        if ($snippet = Snippet::query()->where('name', App::NAME)->first()) {
            /** @var Snippet $snippet */
            $snippet->delete();
            $output->writeln('<info>Removed snippet "' . $snippet->name . '"</info>');
        }

        $output->writeln('<info>Rollback Phinx migrations</info>');
        $phinx = new TextWrapper(new PhinxApplication(), ['configuration' => $srcPath . '/core/phinx.php']);
        if ($res = $phinx->getRollback('local', 0)) {
            $output->writeln(explode(PHP_EOL, $res));
        }

        if (is_dir($corePath)) {
            unlink($corePath);
            $output->writeln('<info>Removed symlink for "core"</info>');
        }
        if (is_dir($assetsPath)) {
            unlink($assetsPath);
            $output->writeln('<info>Removed symlink for "assets"</info>');
        }

        $this->modx->getCacheManager()->refresh();
        $output->writeln('<info>Cleared MODX cache</info>');
    }
}
