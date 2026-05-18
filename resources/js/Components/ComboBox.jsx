import { cn } from '@/lib/utils';
import { IconCaretDown, IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function ComboBox({ items, selectedItem, onSelect, placeholder = 'Pilih Item...' }) {
    const [open, setOpen] = useState(false);

    const handleSelect = (value) => {
        onSelect(value);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                    size="xl"
                >
                    {items.find((item) => item.label == selectedItem)?.label || placeholder}
                    <IconCaretDown className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="max-h-[--redux-popover-content-max-height] w-[--redux-popover-content-max-width] p-0"
                align="start"
            >
                <Command>
                    <CommandInput placeholder={placeholder} className="h-9" />
                    <CommandList>
                        <CommandEmpty>Tidak ada data</CommandEmpty>
                        <CommandGroup>
                            {items.map((item) => (
                                <CommandItem key={item.value} onSelect={() => handleSelect(item.value)}>
                                    {item.label}
                                    <IconCheck
                                        className={cn(
                                            'ml-auto size-4',
                                            selectedItem === item.label ? 'opacity-100' : 'opacity-0',
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
