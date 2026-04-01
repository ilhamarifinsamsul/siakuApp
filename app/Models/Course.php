<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
        'faculty_id',
        'department_id',
        'teacher_id',
        'academic_year_id',
        'code',
        'name',
        'credit',
        'semester',
    ];

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    // public function teacher()
    // {
    //     return $this->belongsTo(Teacher::class);
    // }

    public function academicYear()
    {
        return $this->belongsTo(AcademicYear::class);
    }

    public function schedules(){
        return $this->hasMany(Schedule::class);
    }

    public function attendances(){
        return $this->hasMany(Attendance::class);
    }

    public function grades(){
        return $this->hasMany(Grade::class);
    }
}
