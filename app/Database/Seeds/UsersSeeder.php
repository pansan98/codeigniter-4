<?php
namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use Faker\Factory;

class UsersSeeder extends Seeder {
    public function run() {
        $model = model('UsersModel');
        $faker = Factory::create();

        for($i = 1; $i <= 1; $i++) {
            $model->insert([
                'login_id' => 'test',
                'login_pw' => 'test',
                'name' => $faker->lastName,
                'remote_ip' => $faker->ipv4
            ]);
        }
    }
}