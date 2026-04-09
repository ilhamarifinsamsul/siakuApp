<?php

use App\Models\AcademicYear;

if (!function_exists(function: 'flashMessage')) {
    function flashMessage($message, $type = 'success'): void {
        session()->flash('message', $message);
        session()->flash('type', $type);
    }
}

if (!function_exists(function: 'signatureMidtrans')) {
    function signatureMidtrans($order_id, $status_code, $gross_amount, $server_key): string {
        return hash("sha512", $order_id . $status_code . $gross_amount . $server_key);
    }
}

if (!function_exists(function: 'activeAcademicYear')) {
    function activeAcademicYear(){
        return AcademicYear::query()->where('is_active', true)->first();
    }
}

if (!function_exists(function: 'getLatterGrade')) {
    function getLatterGrade($grade): string{
        return match (true) {
            $grade >= 90 => 'A',
            $grade >= 80 => 'B',
            $grade >= 70 => 'C',
            $grade >= 60 => 'D',
            default => 'E',
        };
    }
}

?>
