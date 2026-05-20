<?php

namespace App\Http\Controllers\Operator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;

class DashboardOperatorController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request) : Response
    {
        return inertia('Operators/Dashboard', [
            'page_settings' => [
                'title' => 'Dashboard Operator',
                'subtitle' => 'Menampilkan semua statistik pada platform ini'
            ]
        ]);
    }
}
