<?php
namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use Faker\Factory;
use App\Models\PostModel;
use Config\Database;

class PostsSeeder extends Seeder {
    
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
                'title' => [
                    'type' => 'VARCHAR',
                    'constraint' => 191,
                    'null' => false
                ],
                'content' => [
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
            $forge->createTable('posts');
        } catch(\Exception $e) {
            error_log($e->getMessage(), 0);
            throw $e;
        }
    
        //return 'done.';
    }
}