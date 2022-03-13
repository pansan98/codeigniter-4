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

if(!function_exists('__e')) {
    function __e($string, $encode = 'UTF-8')
    {
        return htmlspecialchars($string, ENT_QUOTES, $encode);
    }
}

if(!function_exists('__short')) {
    function __short($string, $width = 100, $maker = '...', $encode = 'UTF-8')
    {
        return mb_strimwidth($string, 0, $width, $maker, $encode);
    }
}