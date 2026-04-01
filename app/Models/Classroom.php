<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Classroom extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'faculty_id',
        'department_id',
        'academic_year_id',
        'name',
        'slug'
    ];

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function academicYear()
    {
        return $this->belongsTo(AcademicYear::class);
    }

    public function students(){
        return $this->hasMany(Student::class);
    }

    public function schedules(){
        return $this->hasMany(Schedule::class);
    }

    public function courses(){
        return $this->hasManyThrough(Course::class, Schedule::class, 'classroom_id', 'id', 'id', 'course_id');
    }
}
