// src/components/button/button.tsx

import React from "react";
export type ButtonVariant = "primary" | "secondary" | "disabled" | "large" | "small";

export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
    type = "button",
    children,
    onClick,
    className = "",
    style,
    disabled = false,
    variant = "primary",
}) => {
    const baseClasses = "px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses: Record<ButtonVariant, string> = {
        primary: "bg-[var(--button-bg-color)] text-[var(--button-text-color)]",
        secondary: "bg-[var(--button-secondary-bg-color)] text-[var(--button-secondary-text-color)]",
        disabled: "bg-[var(--button-disabled-bg-color)] text-[var(--button-disabled-text-color)]",
        large: "bg-[var(--button-bg-color)] text-[var(--button-text-color)] px-6 py-3",
        small: "bg-[var(--button-bg-color)] text-[var(--button-text-color)] px-2 py-1",
    };

    const selectedVariantClasses = variantClasses[variant] || variantClasses.primary;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${selectedVariantClasses} ${className}`}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;