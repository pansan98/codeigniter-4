<?php

namespace App\Controllers;

use App\Controllers\CustomBaseController;
use App\Models\User as UserModel;

class User extends CustomBaseController
{
    protected $models = [
        'item' => UserModel::class
    ];
    
    public function index()
    {
        //
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
                    'min_length' => 'Your {field} is too short. You want to get hacked???'
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
