import React from "react";

            interface ButtonProps {
                type?: 'button' | 'submit' | 'reset';
                children: React.ReactNode;
                onClick?: () => void;
                className?: string;
                style?: React.CSSProperties;
                disabled?: boolean;
                size?: 'sm' | 'md' | 'lg';
                variant?: 'default' | 'icon';
                label?: string;
            }

            const Button: React.FC<ButtonProps> = ({
                type = 'button',
                children,
                onClick,
                className = '',
                style,
                disabled = false,
                size = 'md',
                variant = 'default',
                label,
            }) => {
                const sizeClasses = {
                    sm: 'p-1',
                    md: variant === 'icon' ? 'p-2' : 'px-4 py-2',
                    lg: variant === 'icon' ? 'p-3' : 'px-6 py-3'
                };

                return (
                    <button
                        type={type}
                        onClick={onClick}
                        disabled={disabled}
                        className={`${sizeClasses[size]} border rounded focus:outline-none focus:ring ${className}`}
                        style={{
                            backgroundColor: `var(--button-bg-color)`,
                            color: `var(--button-text-color)`,
                            borderColor: `var(--border-color)`,
                            ...style,
                        }}
                    >
                        {label || children}
                    </button>
                );
            };

            export default Button;