import React, { useState } from "react";
import "@components/dropdown/dropdown.css";

export type DropDownVariant = "default" | "compact";

export interface DropDownProps {
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    variant?: DropDownVariant;
    className?: string;
}

const DropDown: React.FC<DropDownProps> = ({
                                               options,
                                               value,
                                               onChange,
                                               variant = "default",
                                               className = "",
                                           }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`dropdown dropdown--${variant} ${className}`}>
            <div className="dropdown__control" onClick={() => setIsOpen(!isOpen)}>
                {options.find((o) => o.value === value)?.label || "Select..."}
            </div>
            {isOpen && (
                <div className="dropdown__menu">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="dropdown__item"
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

export default DropDown;
