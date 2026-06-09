import ApplicationLogo from '@/Components/ApplicationLogo';
import NavigationMenu from '@/Components/NavigationMenu';
import { Avatar, AvatarFallback } from '@/Components/ui/avatar';
import { Button } from '@/Components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Disclosure } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { IconChevronCompactDown, IconLayoutSidebar, IconLogout2, IconX } from '@tabler/icons-react';

export default function HeaderStudentLayout({ url }) {
    return (
        <>
            <Disclosure
                as="nav"
                className="border-b border-blue-300 border-opacity-25 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-4 lg:border-none"
            >
                {({ open }) => (
                    <>
                        <div className="px-6 lg:px-24">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <ApplicationLogo
                                        bgLogo="from-orange-500 via-orange-600 to-orange-700"
                                        colorLogo="text-white"
                                        colorText="text-white"
                                    />
                                </div>
                                <div className="flex lg:hidden">
                                    {/* mobile */}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-blue-500 hover:text-white focus:outline-none">
                                        <span className="absolute -inset-0.5" />
                                        {open ? (
                                            <IconX className="block size-6" />
                                        ) : (
                                            <IconLayoutSidebar className="block size-6" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden lg:ml-4 lg:block">
                                    <div className="flex items-center">
                                        <div className="hidden lg:mx-10 lg:block">
                                            <div className="flex space-x-4">
                                                <NavigationMenu
                                                    url="#"
                                                    active={url.startsWith('students/dashboard')}
                                                    title="Dashboard"
                                                />
                                                {/* scheduls */}
                                                <NavigationMenu
                                                    url="#"
                                                    active={url.startsWith('students/schedules')}
                                                    title="Jadwal Kuliah"
                                                />
                                                {/* study-plan */}
                                                <NavigationMenu
                                                    url="#"
                                                    active={url.startsWith('students/study-plans')}
                                                    title="Kartu Rencana Studi"
                                                />
                                                {/* study-result */}
                                                <NavigationMenu
                                                    url="#"
                                                    active={url.startsWith('students/study-results')}
                                                    title="Kartu Hasil Studi"
                                                />
                                                {/* fees */}
                                                <NavigationMenu
                                                    url="#"
                                                    active={url.startsWith('students/fees')}
                                                    title="Pembayaran UKT"
                                                />
                                            </div>
                                        </div>
                                        {/* profile dropdown */}
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="blue"
                                                    size="xl"
                                                    className="data-[state=open]:bg-orange-500 data-[state=open]:text-white"
                                                >
                                                    <Avatar className="size-8 rounded-lg">
                                                        <AvatarFallback className="rounded-lg text-blue-600">
                                                            X
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                                        <span className="truncate font-semibold">Luffy</span>
                                                        <span className="truncate text-xs text-gray-200">
                                                            luffy@bwa.test
                                                        </span>
                                                    </div>
                                                    <IconChevronCompactDown className="ml-auto size-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent
                                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                                side="bottom"
                                                align="end"
                                                sideOffset={4}
                                            >
                                                <DropdownMenuLabel className="p-0 font-normal">
                                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                                        <Avatar className="size-8 rounded-lg">
                                                            <AvatarFallback className="rounded-lg text-blue-600">
                                                                X
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                                            <span className="truncate font-semibold">Luffy</span>
                                                            <span className="truncate text-xs text-gray-200">
                                                                luffy@bwa.test
                                                            </span>
                                                        </div>
                                                    </div>
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem asChild>
                                                    <Link>
                                                        <IconLogout2 />
                                                        Logout
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel>
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('/students/dashboard')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Dashboard
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('/students/schedules')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Jadwal Kuliah
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('/students/study-plans')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Kartu Rencana Studi
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('/students/study-results')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Kartu Hasil Studi
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('/students/fees')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Pembayaran UKT
                                </Disclosure.Button>
                            </div>
                            <div className="px-2 pb-3">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Avatar>
                                            <AvatarFallback>X</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-white">Luffy</div>
                                        <div className="text-sm text-white">luffy@bwa.test</div>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
                                    >
                                        <IconLogout2 className="size-5" />
                                        Logout
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <header className="py-6"></header>
        </>
    );
}
