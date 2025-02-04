import React, { useState } from "react";

export type DropDownVariant = "default" | "compact";

export interface DropDownProps {
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    variant?: DropDownVariant;
    className?: string;
}

export const DropDown: React.FC<DropDownProps> = ({
                                               options,
                                               value,
                                               onChange,
                                               variant = "default",
                                               className = "",
                                           }) => {
    const [isOpen, setIsOpen] = useState(false);

    const controlStyles = {
        default: "p-md",
        compact: "p-sm text-sm"
    };

    return (
        <div className={`relative w-full ${className}`}>
            <div
                className={`
                    ${controlStyles[variant]}
                    border border-DEFAULT 
                    rounded-md 
                    cursor-pointer 
                    bg-bg-primary
                    text-text-primary
                    transition-normal
                    ease-DEFAULT
                `}
                onClick={() => setIsOpen(!isOpen)}
            >
                {options.find((o) => o.value === value)?.label || "Select..."}
            </div>
            {isOpen && (
                <div className="absolute w-full mt-xs bg-bg-primary border border-DEFAULT shadow-lg rounded-md z-50">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="p-md cursor-pointer hover:bg-bg-alt1 text-text-primary"
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};