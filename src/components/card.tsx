import React from "react";
import clsx from "clsx";
import Typography from "@components/typography.tsx"; // ✅ Use Typography

export type CardVariant = "default" | "elevated" | "bordered" | "shadow";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    variant?: CardVariant;
    className?: string;
}

const Card: React.FC<CardProps> = ({
                                       title,
                                       description,
                                       variant = "default",
                                       className = "",
                                       children,
                                       ...props
                                   }) => {
    const cardClass = clsx(
        "p-6 rounded-lg transition-all duration-300 border", // Base styles
        {
            default: "bg-surface text-content shadow-sm",
            elevated: "bg-surface-elevated text-content shadow-lg border-border-strong",
            bordered: "border-2 border-primary p-8 rounded-md",
            shadow: "shadow-lg border border-border-strong",
        }[variant],
        className
    );

    return (
        <div className={cardClass} {...props}>
            {title && (
                <Typography as="h2" variant="subtitle" font="sans" weight="bold" className="mb-2">
                    {title}
                </Typography>
            )}
            {description && (
                <Typography as="p" variant="body" font="sans" weight="normal" className="mb-4">
                    {description}
                </Typography>
            )}
            {children}
        </div>
    );
};

export default Card;
