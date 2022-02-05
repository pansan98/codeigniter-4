<?php

namespace App\Models;

use CodeIgniter\Model;

abstract class BaseModel extends Model {
    // create table
    abstract public function create_table();
}