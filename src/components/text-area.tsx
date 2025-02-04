import React from "react";
import clsx from "clsx";

interface TextAreaProps {
    label?: string;
    placeholder?: string;
    footer?: React.ReactNode;
    variant?: "default" | "error" | "success" | "disabled";
    className?: string;
    value?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
    label,
    placeholder = "Enter text...",
    footer,
    variant = "default",
    className,
    value
}) => {
    return (
        <div className="flex flex-col w-full">
            {label && <label className="text-text-primary mb-1 font-medium">{label}</label>}

            <textarea
                className={clsx(
                    "w-full p-md rounded-md border text-text-primary bg-bg-primary outline-none transition-all duration-fast ease-in-out",
                    {
                        "border-border focus:ring-2 focus:ring-button-hover": variant === "default",
                        "border-[var(--border-color-error)] text-[var(--text-error)] bg-[var(--bg-error)] focus:ring-[var(--border-color-error)]": variant === "error",
                        "border-[var(--border-color-success)] text-[var(--text-success)] bg-[var(--bg-success)] focus:ring-[var(--border-color-success)]": variant === "success",
                        "bg-button-disabled text-button-disabled-text cursor-not-allowed opacity-50": variant === "disabled",
                    },
                    className
                )}
                placeholder={placeholder}
                disabled={variant === "disabled"}
                value={value}
            />

            {footer && <div className="mt-2 text-sm text-text-secondary">{footer}</div>}
        </div>
    );
};

export default TextArea;