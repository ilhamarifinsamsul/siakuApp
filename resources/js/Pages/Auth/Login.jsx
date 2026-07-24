import ApplicationLogo from '@/Components/ApplicationLogo';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import { Alert, AlertDescription } from '@/Components/ui/alert';
import { Button } from '@/Components/ui/button'; // Pastikan Anda mengimpor Button
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import GuestLayout from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
            <div className="flex flex-col px-6 py-4">
                <ApplicationLogo bgLogo="from-blue-500 via-blue-600" colorLogo="text-white" colorText="text-bule" />
                <div className="flex flex-col items-center justify-center py-12 lg:py-48">
                    <div className="mx-auto flex w-full flex-col gap-6 lg:w-1/2">
                        <div className="grid gap-2 text-center">
                            {status && (
                                <Alert variant="success">
                                    {' '}
                                    {/* Typo: 'succes' menjadi 'success' */}
                                    <AlertDescription>{status}</AlertDescription>
                                </Alert>
                            )}
                            <h1 className="text-3xl font-bold text-foreground">Masuk</h1>
                            <p className="text-balance text-muted-foreground">Masukkan Email & Password Anda</p>
                        </div>
                        <form onSubmit={onHandleSubmit}>
                            <div className="grid gap-4">
                                {/* --- Input Email --- */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        placeholder="luffydmonkey@gmail.com"
                                        onChange={(e) => setData(e.target.name, e.target.value)}
                                    />
                                    {errors.email && <InputError message={errors.email} />}
                                </div>

                                {/* --- Input Password --- */}
                                {/* PERBAIKAN: Menghapus 'flex items-center' agar sejajar secara vertikal */}
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        autoComplete="new-password"
                                        value={data.password}
                                        onChange={(e) => setData(e.target.name, e.target.value)}
                                    />
                                    {errors.password && <InputError message={errors.password} />}
                                </div>

                                {/* --- Checkbox Remember Me --- */}
                                <div className="grid gap-2">
                                    <div className="flex items-center space-x-2">
                                        {' '}
                                        {/* Ganti items-top jadi items-center */}
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            // PERBAIKAN: chacked -> checked
                                            checked={data.remember}
                                            // PERBAIKAN: Sesuaikan event onChange berdasarkan komponen Anda
                                            // Jika bawaan Breeze standar: onChange={(e) => setData('remember', e.target.checked)}
                                            // Jika Shadcn UI: onCheckedChange={(checked) => setData('remember', checked)}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <Label htmlFor="remember" className="cursor-pointer text-sm font-normal">
                                            Ingat saya
                                        </Label>
                                    </div>
                                    {errors.remember && <InputError message={errors.remember} />}
                                </div>

                                {/* --- Tombol Submit --- */}
                                {/* PERBAIKAN: Menambahkan tombol submit agar form bisa dikirim */}
                                <Button
                                    type="submit"
                                    className="mt-2 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:opacity-90"
                                    disabled={processing}
                                >
                                    Masuk
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* --- Kolom Kanan: Gambar Background --- */}
            <div className="relative hidden bg-gray-100 lg:block">
                <img
                    src="/images/bg-univ.jpg"
                    alt="Background Universitas"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Opsional: Lapisan tipis agar gambar tidak terlalu menyilaukan */}
                <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply"></div>
            </div>
        </div>
    );
}

Login.layout = (page) => <GuestLayout children={page} title="Login" />;
