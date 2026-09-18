import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function CardStat({ data, children }) {
    // <-- Perbaikan 1: typo 'childern' menjadi 'children'
    const { title, background, className = '', icon: Icon, iconClassName = '' } = data;

    return (
        <Card className={cn(background, className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {/* Perbaikan 2: panggil Icon dengan awalan kapital, bukan icon */}
                {Icon && <Icon className={cn('size-5', iconClassName)} />}
            </CardHeader>
            <CardContent>{children}</CardContent> {/* <-- Perbaikan 1: panggil children yang benar */}
        </Card>
    );
}
