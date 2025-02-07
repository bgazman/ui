import React, { useState } from "react";
import clsx from "clsx";
import Button from "@components/button.tsx";

export type ButtonGroupVariant = "default" | "outlined" | "pill" | "shadow" | "segmented";
export type ButtonGroupOrientation = "horizontal" | "vertical";

export interface ButtonGroupProps {
    buttons: { label: string; onClick?: () => void; disabled?: boolean }[];
    variant?: ButtonGroupVariant;
    orientation?: ButtonGroupOrientation;
    fullWidth?: boolean;
    defaultActive?: number;
    className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
    buttons,
    variant = "default",
    orientation = "horizontal",
    fullWidth = false,
    defaultActive = 0,
    className = "",
}) => {
    const [activeIndex, setActiveIndex] = useState(defaultActive);

    const handleClick = (index: number, onClick?: () => void) => {
        setActiveIndex(index);
        if (onClick) onClick();
    };

    const groupClass = clsx(
        "inline-flex",
        orientation === "vertical" ? "flex-col space-y-2" : "flex-row space-x-2",
        fullWidth && "w-full",
        className
    );

    const buttonClass = (index: number) =>
        clsx(
            "px-4 py-2 font-medium transition-all duration-200",
            {
                default: "bg-primary text-primary-foreground hover:bg-primary-foreground",
                outlined: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                pill: "rounded-full bg-primary text-primary-foreground hover:bg-primary-foreground",
                shadow: "shadow-lg bg-primary text-primary-foreground hover:shadow-md",
                segmented: "rounded-none first:rounded-l-md last:rounded-r-md",
            }[variant],
            index === activeIndex
                ? "bg-primary-foreground text-primary font-bold"
                : "opacity-80 hover:opacity-100"
        );

    return (
        <div className={groupClass} role="group">
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    className={buttonClass(index)}
                    onClick={() => handleClick(index, button.onClick)}
                    disabled={button.disabled}
                >
                    {button.label}
                </Button>
            ))}
        </div>
    );
};

export default ButtonGroup;