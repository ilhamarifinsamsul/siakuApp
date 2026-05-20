import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard(props) {
    return (
        <AppLayout title={props.page_settings?.title || 'Dashboard'}>
            <div>This is Dahboard Admin</div>
        </AppLayout>
    );
}
