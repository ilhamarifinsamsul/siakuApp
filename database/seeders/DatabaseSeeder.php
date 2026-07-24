<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
            FacultySeeder::class,
            FeeGroupSeeder::class,
        ]);

        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Monkey D Luffy',
            'email' => 'luffy@gmail.com',
        ])->assignRole(Role::create([
            'name' => 'Admin'
        ]));

        $operator = User::factory()->create([
            'name' => 'Ilham Arifin',
            'email' => 'ilham@gmail.com'
        ])->assignRole(Role::create([
            'name' => 'Operator'
        ]));

        $operator->operator()->create([
            'faculty_id' => 1,
            'department_id' => 1,
            'employee_number' => str()->padLeft(mt_rand(0, 999999), 6, '0')
        ]);

        $teacher = User::factory()->create([
            'name' => 'Virda',
            'email' => 'virda@gmail.com'
        ])->assignRole(Role::create([
            'name' => 'Teacher'
        ]));

        $teacher->teacher()->create([
            'faculty_id' => 1,
            'department_id' => 1,
            'teacher_number' => str()->padLeft(mt_rand(0, 999999), 6, '0'),
            'academic_title' => 'Dosen Ahli'
        ]);

        $student = User::factory()->create([
            'name' => 'Firman',
            'email' => 'firman@gmail.com'
        ])->assignRole(Role::create([
            'name' => 'Student'
        ]));

        $student->student()->create([
            'faculty_id' => 1,
            'department_id' => 1,
            'fee_group_id' => rand(1, 6),
            'student_number' => str()->padLeft(mt_rand(0, 999999), 6, '0'),
            'semester' => 1,
            'batch' => 2025
        ]);


    }
}
