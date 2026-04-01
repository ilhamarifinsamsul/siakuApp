<?php

namespace App\Models;

use App\Enums\StudyPlanStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StudyPlan extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'student_id',
        'academic_year_id',
        'status',
        'semester'
    ];

    protected function casts(): array {
        return [
            'status' => StudyPlanStatus::class
        ];
    }

    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function academicYear(){
        return $this->belongsTo(AcademicYear::class);
    }

    public function schedules(){
        return $this->belongsToMany(Schedule::class, 'study_plan_schedule')->withTimestamps();
    }

}
