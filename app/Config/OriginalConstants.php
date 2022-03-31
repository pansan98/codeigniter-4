<?php
// Directory Separator short
define('DS', DIRECTORY_SEPARATOR);

// Environment URL change
if(!defined('MyBaseURL')) {
    $s = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') ? 's' : '';
    $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
    define('MyBaseURL',"http{$s}://{$host}/");
}