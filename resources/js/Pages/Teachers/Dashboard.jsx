import CardStat from '@/Components/CardStat';
import HeaderTitle from '@/Components/HeaderTitle';
import AppLayout from '@/Layouts/AppLayout';
import { usePage } from '@inertiajs/react';
import { IconBooks, IconCalendar, IconDoorEnter, IconLayout2 } from '@tabler/icons-react';

export default function Dashboard(props) {
    const auth = usePage().props.auth.user;
    return (
        <div className="flex w-full flex-col pb-12">
            <div className="mb-8 flex flex-col items-start justify-between gap-y-6 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subTitle={props.page_settings.subTitle}
                    icon={IconLayout2}
                />
            </div>
            <div className="mb-8 flex flex-col">
                <h2 className="text-xl font-medium leading-relaxed text-foreground">Hii, {auth.name}</h2>
                <p className="text-sm text-muted-foreground">Selamat Datang di Sistem Informasi Akademik</p>
            </div>
            {/* menampilkan statistik*/}
            <div className="mb-8 grid gap-4 lg:grid-cols-3">
                {/* mata kuliah */}
                <CardStat
                    data={{
                        title: 'Total Mata Kuliah',
                        icon: IconBooks,
                        background: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600',
                        iconClassName: 'text-white',
                    }}
                >
                    <div className="text-2xl font-bold">{props.count.courses}</div>
                </CardStat>
                {/* classroom */}
                <CardStat
                    data={{
                        title: 'Total Kelas',
                        icon: IconDoorEnter,
                        background: 'text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600',
                        iconClassName: 'text-white',
                    }}
                >
                    <div className="text-2xl font-bold">{props.count.classrooms}</div>
                </CardStat>
                {/* Jadwal */}
                <CardStat
                    data={{
                        title: 'Total Jadwal',
                        icon: IconCalendar,
                        background: 'text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600',
                        iconClassName: 'text-white',
                    }}
                >
                    <div className="text-2xl font-bold">{props.count.schedules}</div>
                </CardStat>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <AppLayout title={page.props.page_settings.title} children={page} />;
