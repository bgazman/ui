import React from "react";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "icon";
}

const Button: React.FC<ButtonProps> = ({
                                           type = "button",
                                           children,
                                           onClick,
                                           className = "",
                                           disabled = false,
                                           size = "md",
                                           variant = "default",
                                       }) => {
    // Generate dynamic size classes
    const sizeClass =
        size === "sm"
            ? "p-1 text-sm"
            : size === "lg"
                ? variant === "icon"
                    ? "p-3"
                    : "px-6 py-3 text-lg"
                : variant === "icon"
                    ? "p-2"
                    : "px-4 py-2 text-base";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${sizeClass}
                border rounded transition-colors duration-300
                focus:outline-none focus:ring
                bg-[var(--button-bg-color)] text-[var(--button-text-color)] border-[var(--border-color)]
                hover:bg-[var(--button-hover-bg-color)] hover:text-[var(--button-hover-text-color)]
                disabled:opacity-50 disabled:cursor-not-allowed
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button;
