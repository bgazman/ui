import React from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "disabled" | "tab";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

/**
 * Button Component
 * - variant: "primary", "secondary", "disabled"
 * - size: "sm", "md", "lg"
 */
export const Button: React.FC<ButtonProps> = ({
                                                  variant = "primary",
                                                  size = "md",
                                                  className,
                                                  disabled,
                                                  children,
                                                  ...rest
                                              }) => {
    // Common base styles for all buttons
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-fast";

    // Variant-specific styles
    const variantStyles: Record<ButtonVariant, string> = {
        primary: "bg-button text-button-text hover:bg-button-hover hover:text-button-hoverText",
        secondary: "bg-button-secondary text-button-secondary-text hover:bg-button-secondary-hover hover:text-button-secondary-hoverText",
        disabled: "bg-button-disabled text-button-disabled-text cursor-not-allowed",
    };

    // Size-specific styles
    const sizeStyles: Record<ButtonSize, string> = {
        sm: "px-sm py-xs text-sm",
        md: "px-md py-sm text-md",
        lg: "px-lg py-md text-lg",
    };

    // If the disabled prop is passed, force the disabled variant
    const finalVariant = disabled ? "disabled" : variant;

    return (
        <button
            className={clsx(
                baseStyles,
                variantStyles[finalVariant],
                sizeStyles[size],
                className
            )}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};
