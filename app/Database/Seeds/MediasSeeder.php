<?php
namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use Faker\Factory;
use App\Models\MediaModel;
use Config\Database;

class MediasSeeder extends Seeder {
    
    public function run() {
        try {
            $forge = Database::forge();
        
            $fields = [
                'id' => [
                    'type' => 'INT',
                    'unsigned' => true,
                    'auto_increment' => true
                ],
                'user_id' => [
                    'type' => 'INT',
                    'null' => false,
                ],
                'post_id' => [
                    'type' => 'INT',
                    'null' => false
                ],
                'path' => [
                    'type' => 'LONGTEXT',
                    'null' => false
                ],
                'name' => [
                    'type' => 'LONGTEXT',
                    'null' => true
                ],
                'created_at' => [
                    'type' => 'datetime'
                ],
                'updated_at' => [
                    'type' => 'datetime'
                ],
                'deleted_at' => [
                    'type' => 'datetime'
                ]
            ];
        
            $forge->addField($fields);
            $forge->addPrimaryKey('id');
            $forge->createTable('medias');
        } catch(\Exception $e) {
            error_log($e->getMessage(), 0);
            throw $e;
        }
    
        //return 'done.';
    }
}