<?php

namespace App\Controllers;

use App\Controllers\CustomBaseController;

class Product extends CustomBaseController
{
    public function index()
    {
        return view('product/index.html.php');
    }
}
