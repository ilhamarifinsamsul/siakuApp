<?php

namespace App\Http\Controllers\Student;

use App\Enums\StudyPlanStatus;
use App\Http\Controllers\Controller;
use App\Models\StudyPlan;
use Illuminate\Http\Request;
use Inertia\Response;
use App\Models\Fee;
use App\Enums\FeeStatus;

class DashboardStudentController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        return inertia('Students/Dashboard', [
            'page_settings' => [
                'title' => 'Dashboard',
                'subtitle' => 'Selamat datang di Dashboard Mahasiswa'
            ],
            'count' => [
                'study_plans_approved' => StudyPlan::query()
                ->where('status', StudyPlanStatus::APPROVED->value)->count(),
                'study_plans_reject' => StudyPlan::query()
                ->where('status', StudyPlanStatus::REJECT->value)->count(),
                'total_payments' => Fee::query()
                ->where('student_id', auth()->user()->student->id)
                ->where('status', FeeStatus::SUCCESS->value)
                ->with('fee_group')->get()
                ->sum(fn($fee) => $fee->fee_group->amount)
            ]
        ]);
    }
}
