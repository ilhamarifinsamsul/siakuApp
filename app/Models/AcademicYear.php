<?php

namespace App\Models;

use App\Enums\AcademicYearSemester;
use Illuminate\Database\Eloquent\Model;

class AcademicYear extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'start_date',
        'end_date',
        'semester',
        'is_active',
    ];

    protected $casts = [
        'semester' => AcademicYearSemester::class
    ];
}
