<?php

namespace App\Controllers;

use App\Controllers\CustomBaseController;
use App\Models\UsersModel;

class User extends CustomBaseController
{
    protected $views = [
        'index' => 'user/login.html.php',
        'mypage' => 'user/mypage/index.html.php'
    ];
    
    protected $models = [
        'item' => UsersModel::class
    ];
    
    public function index()
    {
        //
        return $this->view('index');
    }
    
    public function mypage()
    {
        //return $this->view('mypage');
        return view($this->views['mypage']);
    }
    
    public function create()
    {
        helper(['form', 'url']);
        
        $validation = $this->createValidations([
            'login_id' => [
                'label' => 'ログインID', 'rules' => 'required', 'errors' => [
                    'required' => 'required {field} input.'
                ]
            ],
            'login_pass' => [
                'label' => 'パスワード', 'rules' => 'required|min_length[4]', 'errors' => [
                    'required' => 'required {field} input.',
                    'min_length' => 'Your {field} is too short.'
                ]
            ],
            'login_pass_conf' => [
                'label' => 'パスワード再入力', 'rules' => 'required|min_length[4]|matches[login_pass]', 'errors' => [
                    'required' => 'required {field} input.'
                ]
            ],
            'mail' => [
                'label' => 'メールアドレス', 'rules' => 'valid_email'
            ]
        ]);
        
        
    }
}
