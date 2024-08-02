<?php
/** @var \MODX\Revolution\modX $modx */

if ($modx->services->has('mmxSearch')) {
    $modx->services->get('mmxSearch')->handleEvent($modx->event);
}