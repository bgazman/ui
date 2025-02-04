import React from "react";
import clsx from "clsx";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * color: badge color variant
     */
    color?: "primary" | "secondary" | "success" | "danger";
}

export const Badge: React.FC<BadgeProps> = ({
                                                color = "primary",
                                                className,
                                                children,
                                                ...rest
                                            }) => {
    const baseStyles = "inline-block px-sm py-xs text-xs font-semibold rounded-full";

    const colorStyles = {
        primary: "bg-button text-button-text",
        secondary: "bg-button-secondary text-button-secondary-text",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
    };

    return (
        <span
            className={clsx(baseStyles, colorStyles[color], className)}
            {...rest}
        >
      {children}
    </span>
    );
};
