import React from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The "variant" could switch background or border colors
     * if needed, e.g., "default", "highlight", "warning"
     */
    variant?: "default" | "highlight" | "warning";
}

export const Card: React.FC<CardProps> = ({
                                              variant = "default",
                                              className,
                                              children,
                                              ...rest
                                          }) => {
    const baseStyles =
        "rounded-md p-md border border-border bg-bg-secondary text-text-primary shadow-sm";

    const variantStyles = {
        default: "",
        highlight: "bg-bg-alt1 border-text-tertiary",
        warning: "bg-[#fff3cd] border-[#ffeeba] text-[#856404]", // Example custom color
    };

    return (
        <div className={clsx(baseStyles, variantStyles[variant], className)} {...rest}>
            {children}
        </div>
    );
};
