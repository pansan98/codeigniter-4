<?php

namespace App\Controllers;

use App\Controllers\CustomBaseController;
use CodeIgniter\API\ResponseTrait;

class Api extends CustomBaseController
{
    use ResponseTrait;

    protected $views = [
        'posts_form' => 'api/posts_form/form.html.php'
    ];

    public function index()
    {
        //
    }

    /**
     * @return \CodeIgniter\HTTP\Response
     */
    public function posts_form()
    {
        helper(['form']);
        $html = $this->view('posts_form');

        return $this->setResponseFormat('json')->respond(['html' => $html]);
    }
}
