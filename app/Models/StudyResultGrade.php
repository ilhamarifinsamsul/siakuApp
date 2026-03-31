<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StudyResultGrade extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'study_result_id',
        'course_id',
        'letter',
        'weight_of_value',
        'grade',
    ];
}
