import React from "react";
import clsx from "clsx";

interface CardProps {
    title?: string;
    description?: string;
    image?: string;
    footer?: React.ReactNode;
    children?: React.ReactNode;

    variant?: "default" | "outlined" | "shadowed" | "elevated" | "bordered"; // Variants
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, footer, children, variant = "default" }) => {
    return (
        <div
            className={clsx(
                "bg-bg-alt1 text-text-primary rounded-md p-4 w-64 transition-all duration-fast ease-in-out",
                {
                    "border border-border shadow-md": variant === "default", // Default styling
                    "border border-border bg-transparent": variant === "outlined", // Outlined version
                    "shadow-lg": variant === "shadowed", // Larger shadow
                    "shadow-xl bg-bg-primary": variant === "elevated", // Elevated with background color
                    "border-2 border-border sidebar:bg-sidebar-bg": variant === "bordered", // Thicker border
                }
            )}
        >
            <div className="mb-4">
                {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
                {description && <p className="text-md mb-2">{description}</p>}
                {children}
            </div>
            {footer && <div className="mt-4 border-t border-border pt-2">{footer}</div>}
        </div>
    );
};

export default Card;
