<?php

namespace App\Models;

use CodeIgniter\Model;
use Config\Services;
use Config\Encryption;

abstract class BaseModel extends Model {

    protected $DBGroup          = 'default';
    protected $table            = 'default_table';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $insertID         = 1;
    protected $returnType       = 'object';
    protected $useSoftDeletes   = true;
    protected $protectFields    = true;
    protected $allowedFields    = [];

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

    protected $config_encrypts = [
        'key' => '36f583dd16f4e1e2',
        'driver' => 'OpenSSL'
    ];

    // create table
    abstract public function run();

    /**
     * @param $string
     * @param $mode
     * @return false|string|null
     */
    public function encrypt($string, $mode = 'email')
    {
        switch($mode) {
            case 'password':
                $string = password_hash($string, PASSWORD_DEFAULT);
                break;
            default:
                $config = new Encryption();
                foreach ($this->config_encrypts as $property => $value) {
                    if(property_exists($config, $property)) {
                        $config->{$property} = $value;
                    }
                }

                $encrypt = Services::encrypter($config);
                $string = $encrypt->encrypt($string);
                break;
        }

        return $string;
    }
}