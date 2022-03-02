<?php
/*
 * View Helper
 * フロントで扱うヘルパー関数
 */

use Config\Bootstrap;

if(!function_exists('__error')) {
    function __error($view, $error)
    {
        ob_start();
        @include Bootstrap::APP__VIEW_ROOT_DIR() . $view;
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }
}