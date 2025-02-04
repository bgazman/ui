import React, { useState } from "react";

export type MultiSelectVariant = "default" | "compact";

export interface MultiSelectProps {
    options: { value: string; label: string }[];
    selected: string[];
    onChange: (selected: string[]) => void;
    variant?: MultiSelectVariant;
    className?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
                                                     options,
                                                     selected,
                                                     onChange,
                                                     variant = "default",
                                                     className = "",
                                                 }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOption = (value: string) => {
        if (selected.includes(value)) {
            onChange(selected.filter((v) => v !== value));
        } else {
            onChange([...selected, value]);
        }
    };

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
                {selected.length > 0 ? selected.join(", ") : "Select..."}
            </div>
            {isOpen && (
                <div className="absolute w-full mt-xs bg-bg-primary border border-DEFAULT shadow-lg rounded-md z-50">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="p-md cursor-pointer hover:bg-bg-alt1 text-text-primary flex justify-between items-center"
                            onClick={() => toggleOption(option.value)}
                        >
                            {option.label}
                            {selected.includes(option.value) &&
                                <span className="text-button">✓</span>
                            }
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};