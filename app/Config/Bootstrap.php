<?php

/**
 * App Root Settings And SYSTEM Root Settings
 */
 
namespace Config;

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
    static public function APP__WEB_ROOT_DIR() {
        return self::SYS__ROOT_DIR() . 'public' . DS;
    }
    
    /**
     * @return string
     */
    static public function APP__UPLOADS_DIR() {
        return self::APP__WEB_ROOT_DIR() . 'uploads' . DS;
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
}