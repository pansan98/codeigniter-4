<?php

define('DS', DIRECTORY_SEPARATOR);

if(!defined('MyBaseURL')) {
    $s = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') ? 's' : '';
    $host = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost';
    define('MyBaseURL',"http{$s}://{$host}/");
}