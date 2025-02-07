import React from "react";
import clsx from "clsx";
import Typography from "@components/typography.tsx";

export type BadgeVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "outline";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
                                         children,
                                         variant = "primary",
                                         size = "md",
                                         className = "",
                                         ...props
                                     }) => {
    const badgeClass = clsx(
        "inline-flex items-center justify-center font-medium rounded-full transition-all",
        {
            // Variants
            primary: "bg-primary text-primary-foreground",
            secondary: "bg-surface text-content",
            success: "bg-green-500/10 text-green-500 ring-1 ring-green-500/20",
            danger: "bg-red-500/10 text-red-500 ring-1 ring-red-500/20",
            warning: "bg-yellow-500/10 text-yellow-500 ring-1 ring-yellow-500/20",
            info: "bg-blue-500/10 text-blue-500 ring-1 ring-blue-500/20",
            outline: "border border-border text-content",
        }[variant],
        {
            // Sizes
            sm: "px-2 py-0.5 text-xs",
            md: "px-2.5 py-1 text-sm",
            lg: "px-3 py-1.5 text-base",
        }[size],
        className
    );

    return (
        <span className={badgeClass} {...props}>
            {children}
        </span>
    );
};

export default Badge;