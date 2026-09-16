import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, url, href = '#', title, children, icon: Icon, ...props }) {
    const targetUrl = url || href;

    return (
        <li>
            <Link
                {...props}
                href={targetUrl}
                className={cn(
                    active ? 'bg-blue-800' : 'hover:bg-blue-800',
                    'my-1 flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-white transition-all',
                    props.className,
                )}
            >
                {Icon && <Icon className="size-6" />}
                <span className="truncate">{title || children}</span>
            </Link>
        </li>
    );
}
