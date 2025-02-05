import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'disabled' | 'large' | 'small' | 'tab';

export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    variant?: ButtonVariant;
    isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           type = 'button',
                                           children,
                                           onClick,
                                           className = '',
                                           disabled = false,
                                           variant = 'primary',
                                           isActive = false,
                                       }) => {
    const classes = clsx(
        "px-4 py-2 rounded transition-all",
        {
            "duration-[var(--animation-duration-fast)] ease-[var(--animation-ease)]": true,
            "bg-button text-button-text hover:bg-button-hover hover:text-button-hoverText": variant === "primary",
            "bg-button-secondary text-button-secondary-text hover:bg-button-secondary-hover hover:text-button-secondary-hoverText":
                variant === "secondary",
            "bg-button-disabled text-button-disabled-text cursor-not-allowed": variant === "disabled",
            "text-lg bg-button text-button-text hover:bg-button-hover hover:text-button-hoverText": variant === "large",
            "text-sm bg-button text-button-text hover:bg-button-hover hover:text-button-hoverText": variant === "small",
            "bg-button text-button-secondary-text rounded": variant === "tab" && isActive,
            "bg-button text-button-text border-b-4 border-r-5 border-bg-alt1 rounded-b-none": variant === "tab" && !isActive,
        },
        className
    );

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={classes}>
            {children}
        </button>
    );
};

export default Button;
