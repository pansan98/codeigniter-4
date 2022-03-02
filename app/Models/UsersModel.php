<?php

namespace App\Models;

use CodeIgniter\Model;
use App\Models\BaseModel;
use Config\Database;

class UsersModel extends BaseModel
{
    protected $DBGroup          = 'default';
    protected $table            = 'users';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $insertID         = 1;
    protected $returnType       = 'object';
    protected $useSoftDeletes   = true;
    protected $protectFields    = true;
    protected $allowedFields    = ['login_id', 'login_pw', 'name', 'remote_ip'];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];


    public function run()
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
                'remote_ip' => [
                    'type' => 'VARCHAR',
                    'constraint' => 100,
                    'null' => true
                ]
            ];

            $forge->addField($fields);
            $forge->addPrimaryKey('id');
            $forge->createTable('users');
        } catch(\Exception $e) {
            error_log($e->getMessage(), 0);
            throw $e;
        }

        return 'done.';
    }
}