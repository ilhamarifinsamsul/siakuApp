import { Toaster } from '@/Components/ui/sonner';
import { Head } from '@inertiajs/react';

export default function GuestLayout({ children, title }) {
    return (
        <>
            {/* Head hanya digunakan untuk title dan meta tags */}
            <Head title={title} />

            {/* Elemen UI diletakkan di luar Head */}
            <Toaster position="top-center" richColor />

            {/* Bungkus children dengan div, main, atau biarkan seperti ini agar dirender ke body */}
            <main>{children}</main>
        </>
    );
}
