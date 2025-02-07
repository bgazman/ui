import React from "react";
import clsx from "clsx";

export type DividerVariant = "default" | "muted" | "strong";
export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: DividerVariant;
    orientation?: DividerOrientation;
    thickness?: "thin" | "medium" | "thick";
    className?: string;
}

const Divider: React.FC<DividerProps> = ({
    variant = "default",
    orientation = "horizontal",
    thickness = "medium",
    className = "",
    ...props
}) => {
    const dividerClass = clsx(
        "border-none",
        {
            default: "bg-border",
            muted: "bg-border-muted",
            strong: "bg-content",
        }[variant],
        {
            horizontal: "w-full",
            vertical: "h-full",
        }[orientation],
        {
            thin: orientation === "horizontal" ? "h-px" : "w-px",
            medium: orientation === "horizontal" ? "h-0.5" : "w-0.5",
            thick: orientation === "horizontal" ? "h-1" : "w-1",
        }[thickness],
        className
    );

    return <div className={dividerClass} {...props} />;
};

export default Divider;