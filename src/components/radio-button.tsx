import React from "react";
import "@components/radio-button/radio-button.css";

export type RadioButtonVariant = "default" | "small";

export interface RadioButtonProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
    label: string;
    variant?: RadioButtonVariant;
    className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
                                                     name,
                                                     value,
                                                     checked,
                                                     onChange,
                                                     label,
                                                     variant = "default",
                                                     className = "",
                                                 }) => {
    return (
        <label className={`radio-button radio-button--${variant} ${className}`}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
            />
            <span className="radio-button__checkmark" />
            <span className="radio-button__label">{label}</span>
        </label>
    );
};

export default RadioButton;
