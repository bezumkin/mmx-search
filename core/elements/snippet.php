<?php
/** @var \MODX\Revolution\modX $modx */

if ($modx->services->has('mmxSearch')) {
    /** @var array $scriptProperties */
    return $modx->services->get('mmxSearch')->handleSnippet($scriptProperties);
}