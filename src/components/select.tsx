import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import List from "@components/list.tsx";

export type SelectVariant = "default" | "outlined" | "filled";

export interface SelectProps {
    options: string[];
    placeholder?: string;
    variant?: SelectVariant;
    className?: string;
    searchable?: boolean;
    multiSelect?: boolean;
    onChange?: (selected: string | string[]) => void;
}

const Select: React.FC<SelectProps> = ({
    options,
    placeholder = "Select an option",
    variant = "default",
    className = "",
    searchable = false,
    multiSelect = false,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | string[] | null>(multiSelect ? [] : null);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: string) => {
        if (multiSelect) {
            setSelected((prev) => {
                const updatedSelection = Array.isArray(prev) && prev.includes(option)
                    ? prev.filter((item) => item !== option)
                    : [...(Array.isArray(prev) ? prev : []), option];

                if (onChange) onChange(updatedSelection);
                return updatedSelection;
            });
        } else {
            setSelected(option);
            setIsOpen(false);
            if (onChange) onChange(option);
        }
    };

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectClass = clsx(
        "relative w-full p-2 rounded-md cursor-pointer transition-all",
        {
            default: "bg-secondary border border-gray-300 text-content",
            outlined: "border border-primary text-primary bg-surface",
            filled: "bg-primary text-primary-foreground",
        }[variant],
        className
    );

    const dropdownClass = clsx(
        "absolute left-0 top-full mt-1 w-full rounded shadow-md z-50 max-h-60 overflow-auto",
        {
            default: "bg-secondary border text-content",
            outlined: "bg-surface border border-primary text-primary",
            filled: "bg-primary text-primary-foreground border border-primary-foreground",
        }[variant]
    );

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div className={selectClass} onClick={() => setIsOpen(!isOpen)}>
                {multiSelect
                    ? (Array.isArray(selected) && selected.length > 0
                        ? selected.join(", ")
                        : placeholder)
                    : (selected || placeholder)}
            </div>

            {isOpen && (
                <div className={dropdownClass}>
                    {searchable && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-2 border-b border-border outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    )}

                    <List
                        items={filteredOptions}
                        variant="dropdown"
                        spacing="normal"
                        className="w-full"
                        onItemClick={handleSelect}
                    />
                </div>
            )}
        </div>
    );
};

export default Select;