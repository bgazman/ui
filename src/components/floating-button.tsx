import React from 'react';
import {Button} from '@components/button.tsx';


export type Position = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

export interface FloatingButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    ariaLabel?: string;
    tooltip?: string;
    position?: Position;
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
    return (
        <div
            className={`floating-button-container ${position}`}
            title={tooltip}
        >
            <Button
                onClick={onClick}
                aria-label={ariaLabel}
                className={`floating-button ${className}`}
            >
                {children}
            </Button>
        </div>
    );
};

export default FloatingButton;