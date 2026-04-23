import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function CardStat({ data, childern }) {
    const {
        title,
        background,
        className = "",
        icon: Icon,
        iconClassName = "",
    } = data;
    return (
        <Card className={cn(background, className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon && <Icon className={cn("size-5", iconClassName)} />}
            </CardHeader>
            <CardContent>{childern}</CardContent>
        </Card>
    );
}
