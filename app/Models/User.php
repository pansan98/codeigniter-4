<?php

namespace App\Models;

use App\Models\BaseModel;
use Config\Database;
use Exception;

class User extends BaseModel {
    public function create_table()
    {
        try {
            $forge = Database::forge();
            
            $fields = [
                'id' => [
                    'type' => 'INT',
                    'unsigned' => true,
                    'auto_increment' => true
                ],
                'login_id' => [
                    'type' => 'VARCHAR',
                    'constraint' => 191,
                    'null' => true,
                    'unique' => true
                ],
                'login_pass' => [
                    'type' => 'LONGTEXT',
                    'null' => true
                ],
                'nickname' => [
                    'type' => 'VARCHAR',
                    'constraint' => 191,
                    'null' => true
                ],
                'mail' => [
                    'type' => 'LONGTEXT',
                    'null' => true
                ],
            ];
            
            $forge->addField($fields);
            $forge->addPrimaryKey('id');
            $forge->createTable('user');
        } catch(Exception $e) {
            error_log($e->getMessage(), 0);
            throw $e;
        }
        
        return 'done.';
    }
}