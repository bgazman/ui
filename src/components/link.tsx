import React from "react";
import clsx from "clsx";
import Typography from "@components/typography.tsx";

export type LinkVariant = "default" | "primary" | "secondary" | "disabled";
export type LinkSize = "sm" | "md" | "lg";

export interface LinkComponentProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    variant?: LinkVariant;
    size?: LinkSize;
    className?: string;
    href?: string;
}

const Link: React.FC<LinkComponentProps> = ({
    children,
    variant = "default",
    size = "md",
    className = "",
    ...rest
}) => {
    const linkClass = clsx(
        "inline-block transition duration-200",
        {
            default: "text-content hover:text-primary",
            primary: "text-primary-foreground hover:text-primary-surface",
            secondary: "text-secondary hover:text-secondary-foreground",
            disabled: "text-content-muted cursor-not-allowed opacity-50 pointer-events-none",
        }[variant],
        {
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg font-semibold",
        }[size],
        className
    );

    return (
        <Typography as="a" className={linkClass} {...rest}>
            {children}
        </Typography>
    );
};

export default Link;