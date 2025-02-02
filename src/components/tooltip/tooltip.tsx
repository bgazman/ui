import React from "react";
import "@components/tooltip/tooltip.css";

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
    return (
        <div className={`tooltip ${className}`} style={style}>
            {children}
            <div className={`tooltip__content tooltip__content--${variant}`}>
                {text}
            </div>
        </div>
    );
};

export default Tooltip;
