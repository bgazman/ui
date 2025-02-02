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
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn--${variant} ${className} ${isActive ? 'btn--active' : ''}`}
        >
            {children}
        </button>
    );
};

export default Button;