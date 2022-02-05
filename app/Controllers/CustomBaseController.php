<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use Config\Services;
use \Exception;

class CustomBaseController extends BaseController
{
    protected $models = [];
    
    public function connection() {
        try{
            if(!empty($this->models)) {
                foreach ($this->models as $model) {
                    (new $model)->create_table();
                }
            }
        } catch(Exception $e) {
            throw $e;
        }
    }
    
    /**
     * @param array $options
     * @return \CodeIgniter\Validation\Validation
     */
    protected function createValidations($options = [])
    {
        $validation = Services::validation();
        $validation->setRules($options);
        
        return $validation;
    }
}
