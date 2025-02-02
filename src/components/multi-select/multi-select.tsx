import React, { useState } from "react";
import "@components/multi-select/multi-select.css";

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

    return (
        <div className={`multi-select multi-select--${variant} ${className}`}>
            <div
                className="multi-select__control"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected.length > 0 ? selected.join(", ") : "Select..."}
            </div>
            {isOpen && (
                <div className="multi-select__dropdown">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="multi-select__option"
                            onClick={() => toggleOption(option.value)}
                        >
                            {option.label}
                            {selected.includes(option.value) && <span>✓</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelect;
