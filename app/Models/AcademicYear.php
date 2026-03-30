<?php

namespace App\Models;

use App\Enums\AcademicYearSemester;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicYear extends Model
{
    use SoftDeletes;
    use HasFactory;
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
