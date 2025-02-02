import React from "react";

export type BadgeVariant = "primary" | "success" | "warning" | "error";

export interface BadgeProps {
    variant?: BadgeVariant;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Badge: React.FC<BadgeProps> = ({
                                         variant = "primary",
                                         children,
                                         className = "",
                                         style,
                                     }) => {
    return (
        <span className={`badge badge--${variant} ${className}`} style={style}>
      {children}
    </span>
    );
};

export default Badge;
