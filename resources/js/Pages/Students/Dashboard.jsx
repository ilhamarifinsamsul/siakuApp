import CardStat from '@/Components/CardStat';
import StudentLayout from '@/Layouts/StudentLayout';
import { usePage } from '@inertiajs/react';
import { IconCheck, IconCreditCard, IconX } from '@tabler/icons-react';

export default function Dashboard({ page_settings, count }) {
    const auth = usePage().props.auth.user;
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                <div>
                    <h3 className="text-xl font-semibold leading-relaxed tracking-tight text-foreground">
                        {page_settings.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">Hii, {auth.name}</p>
                </div>
            </div>

            {/* menampilkan statistik*/}
            <div className="mb-8 grid gap-4 lg:grid-cols-3">
                {/* KRS Approver */}
                <CardStat
                    data={{
                        title: 'Kartu Rencana Studi Approved',
                        icon: IconCheck,
                        background: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600',
                        iconClassName: 'text-white',
                    }}
                >
                    {/* HAPUS props. DI SINI */}
                    <div className="text-2xl font-bold">{count.study_plans_approved}</div>
                </CardStat>

                {/* KRS Reject */}
                <CardStat
                    data={{
                        title: 'Kartu Rencana Studi Reject',
                        icon: IconX,
                        background: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600',
                        iconClassName: 'text-white',
                    }}
                >
                    {/* HAPUS props. DI SINI */}
                    <div className="text-2xl font-bold">{count.study_plans_reject}</div>
                </CardStat>

                {/* Total Pembayaran */}
                <CardStat
                    data={{
                        title: 'Total Pembayaran',
                        icon: IconCreditCard,
                        background: 'text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600',
                        iconClassName: 'text-white',
                    }}
                >
                    {/* HAPUS props. DI SINI */}
                    <div className="text-2xl font-bold">{count.total_payments}</div>
                </CardStat>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <StudentLayout title={page.props.page_settings.title}>{page}</StudentLayout>;
