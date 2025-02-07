import React from "react";
import clsx from "clsx";
import Typography from "@components/typography.tsx"; // ✅ Use Typography

export type TextAreaVariant = "default" | "primary" | "secondary" | "success" | "danger";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    variant?: TextAreaVariant;
    className?: string;
    minRows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ label, error, variant = "default", className = "", id, minRows, ...rest }) => {
    const containerClass = "flex flex-col w-full";

    const textareaClass = clsx(
        "w-full border bg-surface text-content rounded-md p-2 outline-none transition-all duration-200 ease-in-out focus:ring-2",
        "resize-none",
        {
            default: "border-border focus:ring-primary",
            primary: "bg-primary text-primary-foreground border-primary focus:ring-primary-foreground",
            secondary: "bg-secondary text-secondary-foreground border-secondary focus:ring-secondary-foreground",
            success: "bg-green-100 text-green-800 border-green-500 focus:ring-green-600",
            danger: "bg-red-100 text-red-800 border-red-500 focus:ring-red-600",
        }[variant],
        error && "border-danger",
        className
    );

    return (
        <div className={containerClass}>
            {label && (
                <Typography as="label" htmlFor={id} variant="body" font="sans" weight="normal" className="mb-1">
                    {label}
                </Typography>
            )}
            <textarea id={id} className={textareaClass} rows={minRows} {...rest} />
            {error && (
                <Typography as="span" variant="caption" font="sans" weight="normal" className="mt-2 text-danger">
                    {error}
                </Typography>
            )}
        </div>
    );
};

export default TextArea;
