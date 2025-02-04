import React from "react";
import "@components/select/select.css";

export type SelectVariant = "default" | "outlined";

export interface SelectProps {
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    variant?: SelectVariant;
    className?: string;
    style?: React.CSSProperties;
}

const Select: React.FC<SelectProps> = ({
                                           options,
                                           value,
                                           onChange,
                                           variant = "default",
                                           className = "",
                                           style,
                                       }) => {
    return (
        <select
            className={`select select--${variant} ${className}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={style}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
