import React from "react";

interface TextAreaProps {
    label?: string;
    placeholder?: string;
    footer?: React.ReactNode;
    variant?: "default" | "error" | "success" | "disabled";
    className?: string;
    value?: string;
    rows?: number;
    name: string;  // Added this as required
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
                                               label,
                                               placeholder = "Enter text...",
                                               footer,
                                               variant = "default",
                                               className = "",
                                               value,
                                               rows = 3,
                                               name,
                                               onChange,
                                               required
                                           }) => {
    const baseClasses = "w-full rounded-md border outline-none transition-all duration-fast ease-in-out resize-none p-md";

    const variantClasses = {
        default: "border-border bg-bg-primary text-text-primary focus:ring-2 focus:ring-button-hover",
        error: "border-[var(--border-color-error)] text-[var(--text-error)] bg-[var(--bg-error)] focus:ring-2 focus:ring-[var(--border-color-error)]",
        success: "border-[var(--border-color-success)] text-[var(--text-success)] bg-[var(--bg-success)] focus:ring-2 focus:ring-[var(--border-color-success)]",
        disabled: "bg-button-disabled text-button-disabled-text cursor-not-allowed opacity-50"
    };

    return (
        <div className="flex flex-col w-full">
            {label && (
                <label htmlFor={name} className="mb-1 text-text-primary font-medium">
                    {label}
                </label>
            )}

            <textarea
                id={name}
                name={name}
                className={`${baseClasses} ${variantClasses[variant]} ${className}`}
                placeholder={placeholder}
                disabled={variant === "disabled"}
                value={value}
                rows={rows}
                onChange={onChange}
                required={required}
            />

            {footer && (
                <div className="mt-2 text-sm text-text-secondary">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default TextArea;