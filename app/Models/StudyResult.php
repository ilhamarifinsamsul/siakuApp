<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StudyResult extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'student_id',
        'academic_year_id',
        'semester',
        'gpa',
    ];

    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function academicYear(){
        return $this->belongsTo(AcademicYear::class);
    }

    public function grades(){
        return $this->hasMany(StudyResultGrade::class);
    }
}
