<?php

namespace App\Libraries;

class File {
    public static $instance;
    
    protected $base_path;
    protected $filter_mime_type = [];
    protected $filter_max_mb = 2;
    
    static public function getInstance()
    {
        if(!self::$instance instanceof File) {
            self::$instance = new static();
        }
        
        return self::$instance;
    }
    
    /**
     * @param $base_path
     */
    public function set_base_path($base_path)
    {
        $this->base_path = $base_path;
    }
    
    /**
     * @return mixed
     */
    public function base_path()
    {
        return $this->base_path;
    }

    /**
     * @param array $mime_type
     */
    public function set_filter_mime_type($mime_type = [])
    {
        $this->filter_mime_type = $mime_type;
    }

    /**
     * @return array
     */
    public function filter_mime_type()
    {
        return $this->filter_mime_type;
    }

    /**
     * @param int $max_mb
     */
    public function set_filter_max_mb($max_mb)
    {
        $this->filter_max_mb = $max_mb;
    }

    /**
     * @return int
     */
    public function filter_max_mb()
    {
        return $this->filter_max_mb;
    }
    
    /**
     * @param $path
     * @return bool
     */
    public function is_mime_type($path)
    {
        $is_valid = false;
        $file_path = $this->base_path() . $path;
        if(file_exists($file_path)) {
            $mime_type = $this->mime_type($path);
        
            if(in_array($mime_type, $this->filter_mime_type())) {
                $is_valid = true;
            }
        }
    
        return $is_valid;
    }
    
    /**
     * @param $path
     * @return array
     */
    public function format($path)
    {
        $mime_type = $this->mime_type($path);
        $extension = $this->extension($path);
        
        $response = [
            'mime_type' => $mime_type,
            'extension' => $extension
        ];
        
        return $response;
    }
    
    /**
     * @param $path
     * @return mixed|null|string|string[]
     */
    protected function mime_type($path)
    {
        $file_path = $this->base_path() . $path;
        
        // 関数が使えない場合を考慮する
        if(function_exists('finfo_open')) {
            $finfo = finfo_open(\FILEINFO_MIME_TYPE);
            $mime_type = finfo_file($finfo, $file_path);
        } elseif(function_exists('shell_exec')) {
            $mime = trim(shell_exec('file -b --mime ' . escapeshellcmd($file_path)));
            if(strpos($mime, ';') !== false) {
                $mime_type = preg_replace("/;[^;]*/", "", $mime);
            } else {
                $mime_type = preg_replace("/ [^ ]*/", "", $mime);
            }
        } else {
            $mime_type = mime_content_type($file_path);
        }
        
        return $mime_type;
    }
    
    /**
     * @param $path
     * @return mixed|string
     */
    protected function extension($path)
    {
        $file_path = $this->base_path() . $path;
        
        $extension = '';
        if(strstr($file_path, '.') !== false) {
            $extensions = explode('.', $file_path);
            $extension = end($extensions);
        }
        
        return $extension;
    }
    
    /**
     * ファイルが存在しているか
     * @param $path
     * @return bool
     */
    public function exists($path)
    {
        return file_exists($this->base_path() . $path);
    }
    
    /**
     * @param $byte
     * @return bool
     */
    public function is_mb_size($byte)
    {
        $mb = $byte / pow(1024, 2);
        return ($mb < $this->filter_max_mb());
    }
}
