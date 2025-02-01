import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'disabled' | 'large' | 'small';

export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
                                           type = 'button',
                                           children,
                                           onClick,
                                           className = '',
                                           style,
                                           disabled = false,
                                           variant = 'primary',
                                       }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn--${variant} ${className}`}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;
