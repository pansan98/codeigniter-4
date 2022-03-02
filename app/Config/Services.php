<?php

namespace Config;

use CodeIgniter\Config\BaseService;

/**
 * Services Configuration file.
 *
 * Services are simply other classes/libraries that the system uses
 * to do its job. This is used by CodeIgniter to allow the core of the
 * framework to be swapped out easily without affecting the usage within
 * the rest of your application.
 *
 * This file holds any application-specific services, or service overrides
 * that you might need. An example has been included with the general
 * method format you should use for your service methods. For more examples,
 * see the core Services file at system/Config/Services.php.
 */
class Services extends BaseService
{
    /*
     * public static function example($getShared = true)
     * {
     *     if ($getShared) {
     *         return static::getSharedInstance('example');
     *     }
     *
     *     return new \CodeIgniter\Example();
     * }
     */

    /**
     * @param string|null $viewPath
     * @param $config
     * @param bool $getShared
     * @return \App\Core\View\View|\CodeIgniter\View\View|mixed
    public static function renderer(string $viewPath = null, $config = null, bool $getShared = true)
    {
        if($getShared) {
            return static::getSharedInstance('renderer', $viewPath, $config);
        }

        if(is_null($config)) {
            $config = new \Config\View();
        }

        if(is_null($viewPath)) {
            $paths = config('Paths');

            $viewPath = $paths->viewDirectory;
        }

        return new \App\Libraries\View($config, $viewPath, static::locator(), CI_DEBUG, static::logger());
    }
     */
}
