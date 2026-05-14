export default function HeaderTitle({ title, subTitle, icon: Icon }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center gap-x-1">
                <Icon className="size-6" />
                <h1 className="line-clamp-1 text-lg font-bold lg:text-2xl">
                    {title}
                </h1>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2 lg:text-base">
                {subTitle}
            </p>
        </div>
    );
}
