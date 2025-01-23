import React from 'react';
import './floating-button.css';

interface FloatingButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    ariaLabel?: string;
    tooltip?: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    className?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
                                                           children,
                                                           onClick,
                                                           ariaLabel,
                                                           tooltip,
                                                           position = 'bottom-right',
                                                           className = '',
                                                       }) => {
    const positionStyles: Record<string, string> = {
        'bottom-right': 'bottom-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'top-right': 'top-4 right-4',
        'top-left': 'top-4 left-4',
    };

    const positionClass = positionStyles[position];

    return (
        <div className={`fixed ${positionClass}`} title={tooltip}>
            <button
                onClick={onClick}
                aria-label={ariaLabel}
                className={`p-4 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
            >
                {children}
            </button>
        </div>
    );
};

export default FloatingButton;