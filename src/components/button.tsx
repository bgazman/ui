import React from 'react';

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
    const baseClasses = 'px-4 py-2 rounded';
    const variantClasses = {
        primary: 'bg-button text-button-text hover:bg-button-hover hover:text-button-hoverText',
        secondary: 'bg-button-secondary text-button-secondary-text hover:bg-button-secondary-hover hover:text-button-secondary-hoverText',
        disabled: 'bg-button-disabled text-button-disabled-text cursor-not-allowed',
        large: 'text-lg bg-button text-button-text hover:bg-button-hover hover:text-button-hoverText',
        small: 'text-sm bg-button text-button-text hover:bg-button-hover hover:text-button-hoverText',
        tab: isActive ? 'bg-button text-button-text' : 'bg-button-secondary text-button-secondary-text',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}>
            {children}
        </button>
    );
};

export default Button;