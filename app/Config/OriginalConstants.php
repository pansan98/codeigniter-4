<?php

define('DS', DIRECTORY_SEPARATOR);

if(!defined('MyBaseURL')) {
    $s = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') ? 's' : '';
    $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
    define('MyBaseURL',"http{$s}://{$host}/");
}