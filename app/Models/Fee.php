<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Fee extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'fee_code',
        'student_id',
        'fee_group_id',
        'academic_year_id',
        'semester',
        'status',
    ];

    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function feeGroup(){
        return $this->belongsTo(FeeGroup::class);
    }

    public function academicYear(){
        return $this->belongsTo(AcademicYear::class);
    }
}
