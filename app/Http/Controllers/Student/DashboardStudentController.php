<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;

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
            ]
        ]);
    }
}
