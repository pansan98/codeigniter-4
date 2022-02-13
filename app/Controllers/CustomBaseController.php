<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use Config\Services;
use Config\Bootstrap;
use \Exception;

class CustomBaseController extends BaseController
{
    protected $views = [
        'index' => 'base/index.html',
        'form' => 'base/form.html'
    ];
    
    protected $data = [];
    protected $models = [];
    
    public function __construct()
    {
        //$this->load->view('bootstrap', Bootstrap::class);
    }
    
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
    
    /**
     * @param string $view
     * @return string
     */
    protected function view($view = 'index')
    {
        $this->load->view('data', $this->data);
        return view($this->views[$view]);
    }
}
