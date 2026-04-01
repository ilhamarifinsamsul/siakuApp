<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Student extends Model
{
    use SoftDeletes;
    use HasFactory;
    protected $fillable = [
        'user_id',
        'faculty_id',
        'department_id',
        'classroom_id',
        'fee_group_id',
        'student_number',
        'semester',
        'batch',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function faculty(){
        return $this->belongsTo(Faculty::class);
    }

    public function department(){
        return $this->belongsTo(Department::class);
    }

    public function classroom(){
        return $this->belongsTo(Classroom::class);
    }

    public function feeGroup(){
        return $this->belongsTo(FeeGroup::class);
    }

    public function attendances(){
        return $this->hasMany(Attendance::class);
    }

    public function grades(){
        return $this->hasMany(Grade::class);
    }

    public function studyPlans(){
        return $this->hasMany(StudyPlan::class);
    }

    public function studyResult(){
        return $this->hasMany(StudyResult::class);
    }

}
