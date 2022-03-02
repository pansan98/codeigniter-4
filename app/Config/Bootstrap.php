<?php

/**
 * App Root Settings And SYSTEM Root Settings
 */
 
namespace Config;

use http\Env;

class Bootstrap {
    
    /**
     * @return string
     */
    static public function SYS__ROOT_DIR()
    {
        return dirname(dirname(__DIR__)) . DS;
    }
    
    /**
     * @return string
     */
    static public function SYS__UPLOADS_DIR()
    {
        return self::SYS__ROOT_DIR() . 'uploads' . DS;
    }
    
    /**
     * @return string
     */
    static public function APP__WEB_ROOT_DIR()
    {
        return self::SYS__ROOT_DIR() . 'public' . DS;
    }
    
    /**
     * @return string
     */
    static public function APP__UPLOADS_DIR()
    {
        return self::APP__WEB_ROOT_DIR() . 'uploads' . DS;
    }

    /**
     * @return string
     */
    static public function APP__ROOT_DIR()
    {
        return self::SYS__ROOT_DIR() . 'app' . DS;
    }

    /**
     * @return string
     */
    static public function APP__VIEW_ROOT_DIR()
    {
        return self::APP__ROOT_DIR() . 'Views' . DS;
    }
    
    /**
     * @return string
     */
    static public function APP__WEB_ROOT_PATH()
    {
        return DS;
    }
    
    /**
     * @return string
     */
    static public function APP__RESOURCES_PATH()
    {
        return self::APP__WEB_ROOT_PATH() . 'resources' . DS;
    }
    
    /**
     * @return string
     */
    static public function APP__BOOTSTRAP_RESOURCES_PATH()
    {
        return self::APP__RESOURCES_PATH() . 'bootstrap' . DS;
    }
    
    /**
     * @return string
     */
    static public function APP__BUNDLE_RESOURCES_PATH()
    {
        return self::APP__RESOURCES_PATH() . 'bundle' . DS;
    }

    /**
     * @return string
     */
    static public function APP__ACTION_DOMAIN()
    {
        // action先の指定時、ドメイン部分を取得します。
        $action = '';

        switch(ENVIRONMENT) {
            case 'development':
            default:
                $action = 'http://ci4.local';
                break;
        }

        return $action;
    }
}