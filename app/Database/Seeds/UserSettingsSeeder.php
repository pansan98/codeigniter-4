<?php
namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use Faker\Factory;
use Config\Database;
use App\Models\UserSetting;

class UserSettingsSeeder extends Seeder {
    
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
                    'unsigned' => true
                ],
                'color' => [
                    'type' => 'VARCHAR',
                    'constraint' => 191,
                    'default' => UserSetting::USER_COLOR_RED
                ],
                'view_image' => [
                    'type' => 'VARCHAR',
                    'constraint' => 191,
                    'default' => UserSetting::VIEW_IMAGE_GALLERY
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
            $forge->addForeignKey('user_id', 'users', 'id', 'CASCADE', 'NULL');
            $forge->createTable('user_setting');
        } catch(\Exception $e) {
            error_log($e->getMessage(), 0);
            throw $e;
        }
    
        //return 'done.';
    }
}