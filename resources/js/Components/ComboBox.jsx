import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { IconCaretDown, IconCheck } from "@tabler/icons-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";

export default function ComboBox({
    items,
    selectedItem,
    onSelect,
    placeholder = "Pilih Item...",
}) {
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
                    className="justify-between w-full"
                    size="xl"
                >
                    {items.find((item) => item.label == selectedItem)?.label ||
                        placeholder}
                    <IconCaretDown className="size-4 ml-2 opacity-50 shrink-0" />
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
                                <CommandItem
                                    key={item.value}
                                    onSelect={() => handleSelect(item.value)}
                                >
                                    {item.label}
                                    <IconCheck
                                        className={cn(
                                            "ml-auto size-4",
                                            selectedItem === item.label
                                                ? "opacity-100"
                                                : "opacity-0"
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
