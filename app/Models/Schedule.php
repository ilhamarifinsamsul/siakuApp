<?php

namespace App\Models;

use App\Enums\ScheduleDay;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Schedule extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'faculty_id',
        'department_id',
        'course_id',
        'classroom_id',
        'academic_year_id',
        'start_time',
        'end_time',
        'day_of_week',
        'quote',
    ];

    protected function casts(): array {
        return [
            'day_of_week' => ScheduleDay::class
        ];
    }

    public function faculty(){
        return $this->belongsTo(Faculty::class);
    }

    public function department(){
        return $this->belongsTo(Department::class);
    }

    public function course(){
        return $this->belongsTo(Course::class);
    }

    public function classroom(){
        return $this->belongsTo(Classroom::class);
    }

    public function academicYear(){
        return $this->belongsTo(AcademicYear::class);
    }

    public function studyPlans(){
        return $this->belongsToMany(StudyPlan::class, 'study_plan_schedule')->withTimestamps();
    }
}
