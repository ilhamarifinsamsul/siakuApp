import StudentLayout from '@/Layouts/StudentLayout';

export default function Dashboard({ page_settings }) {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                <div>
                    <h3 className="text-xl font-semibold leading-relaxed tracking-tight text-foreground">
                        {page_settings.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{page_settings.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <StudentLayout title={page.props.page_settings.title}>{page}</StudentLayout>;
