import React from "react";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "disabled" | "large" | "small";
}

const Button: React.FC<ButtonProps> = ({
                                           type = "button",
                                           children,
                                           onClick,
                                           className = "",
                                           disabled = false,
                                           size = "md",
                                           variant = "primary",
                                       }) => {
    // Generate dynamic size classes
    const sizeClass =
        size === "sm"
            ? "p-1 text-sm"
            : size === "lg"
                ? "px-6 py-3 text-lg"
                : "px-4 py-2 text-base";

    // Generate variant classes
    const variantClass = variant === "secondary"
        ? "bg-[var(--button-secondary-bg-color)] text-[var(--button-secondary-text-color)] hover:bg-[var(--button-secondary-hover-bg-color)] hover:text-[var(--button-secondary-hover-text-color)]"
        : variant === "disabled"
            ? "bg-[var(--button-disabled-bg-color)] text-[var(--button-disabled-text-color)] cursor-not-allowed"
            : variant === "large"
                ? "px-6 py-3 text-lg"
                : variant === "small"
                    ? "px-2 py-1 text-sm"
                    : "bg-[var(--button-bg-color)] text-[var(--button-text-color)] hover:bg-[var(--button-hover-bg-color)] hover:text-[var(--button-hover-text-color)]";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${sizeClass}
                ${variantClass}
                border rounded transition-colors duration-300
                focus:outline-none focus:ring
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button;