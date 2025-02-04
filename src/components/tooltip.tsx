import React from "react";

export type TooltipVariant = "default" | "info" | "error";

export interface TooltipProps {
    text: string;
    variant?: TooltipVariant;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
                                             text,
                                             variant = "default",
                                             children,
                                             className = "",
                                             style,
                                         }) => {
    const variantStyles = {
        default: "bg-bg-alt2 text-text-primary",
        info: "bg-button text-button-text",
        error: "bg-button-secondary text-button-secondary-text"
    };

    return (
        <div className={`relative inline-block group ${className}`} style={style}>
            {children}
            <div className={`
                absolute z-50 p-xs text-xs rounded-sm whitespace-nowrap
                opacity-0 group-hover:opacity-100
                transition-normal ease-DEFAULT
                bottom-full left-1/2 -translate-x-1/2 mb-xs
                ${variantStyles[variant]}
            `}>
                {text}
            </div>
        </div>
    );
};

export default Tooltip;