import React from "react";
import clsx from "clsx";
import Typography from "@components/typography.tsx";

export type ButtonVariant = "primary" | "secondary" | "disabled";
export type ButtonSize = "default" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           variant = "primary",
                                           size = "default",
                                           disabled = false,
                                           className = "",
                                           ...props
                                       }) => {
    const buttonClass = clsx(
        "px-4 py-2 rounded-md transition-all duration-200 flex items-center justify-center",
        {
            primary: "bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary",
            secondary: "bg-surface text-content hover:bg-surface-elevated hover:text-content-muted",
            disabled: "bg-border text-content-muted cursor-not-allowed",
        }[variant],
        size === "large" && "px-6 py-3 text-lg border-r-2 border-2 rounded-lg",
        disabled && "pointer-events-none opacity-50",
        className
    );

    return (
            <button className={buttonClass} disabled={disabled} {...props}>
                <Typography as="span" variant="body" font="sans" weight="medium">
                    {children}
                </Typography>
            </button>
    );
};

export default Button;
