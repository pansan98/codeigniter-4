<?php

namespace App\Controllers;

use App\Controllers\CustomBaseController;
use App\Models\UsersModel;

class User extends CustomBaseController
{
    protected $views = [
        'index' => 'user/login.html.php',
        'mypage' => 'user/mypage/index.html.php',
        'signin' => 'user/login.html.php',
        'signup' => 'user/create.html.php'
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
        helper(['view', 'form']);
        
        /** @var UsersModel $model */
        $model = model('UsersModel');
        $user = $model->getUser();
        
        return $this->view('mypage', [
            'user' => $user,
            'timelines' => [],
            'app_page' => 'input'
        ]);
    }

    /**
     * @return string
     */
    public function signin()
    {
        helper(['form', 'view']);

        $posts = [];
        if($this->request->getMethod(true) === 'POST') {
            $posts = $this->request->getPost();
        }

        return $this->view('signin', [
            'posts' => $posts
        ]);
    }

    /**
     * @return string
     */
    public function signup()
    {
        helper(['form', 'url', 'view']);

        $posts = [];
        $errors = [];
        $posts['remote_ip'] = $this->request->getServer('REMOTE_ADDR');

        if($this->request->getMethod(true) === 'POST') {
            $posts = $this->request->getPost();

            $validation = $this->createValidations([
                'login_id' => [
                    'label' => 'Login Id', 'rules' => 'required|min_length[4]|alpha_dash', 'errors' => [
                        'required' => 'required {field} input.',
                        'min_length' => 'Your {field} is too short.',
                        'alpha_dash' => 'alpha dash.'
                    ]
                ],
                'login_pass' => [
                    'label' => 'Password', 'rules' => 'required|min_length[4]', 'errors' => [
                        'required' => 'required {field} input.',
                        'min_length' => 'Your {field} is too short.'
                    ]
                ],
                'login_pass_conf' => [
                    'label' => 'password confirm', 'rules' => 'required|min_length[4]|matches[login_pass]', 'errors' => [
                        'required' => 'required {field} input.',
                        'matches' => 'not matches.'
                    ]
                ],
                'nickname' => [
                    'label' => 'nick name', 'rules' => 'required', 'errors' => [
                        'required' => 'required {field} input.'
                    ]
                ],
                'mail' => [
                    'label' => 'E-mail', 'rules' => 'valid_email', 'errors' => [
                        'valid_email' => 'Email format.'
                    ]
                ]
            ]);

            $valid = $validation->run($posts);
            $errors = $validation->getErrors();
            if($valid) {
                // エラーなし
                /** @var UsersModel $model */
                $model = model('UsersModel');
                if(!$model->exists('login_id', $posts['login_id']) && !$model->exists('nickname', $posts['nickname'])) {
                    unset($posts['login_pass_conf']);
                    $posts['login_pass'] = $model->encrypt($posts['login_pass'], 'password');

                    $model->save($posts);
    
                    /**
                     * TODO
                     * アカウント作成後、ログイン処理を追加してマイページへ
                     */
                    
                    return $this->view('mypage');
                }

                $model_errors = $model->getError('exists');
                if(!empty($model_errors)) {
                    $keys = array_keys($model_errors);
                    foreach ($keys as $key) {
                        $errors[$key] = 'It has already been registered.';
                    }
                }
            }
        }

        return $this->view('signup', [
            'posts' => $posts,
            'errors' => $errors
        ]);
    }
}
