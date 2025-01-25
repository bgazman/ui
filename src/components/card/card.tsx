import React, { CSSProperties, ReactNode, MouseEventHandler } from 'react';

interface CardProps {
    children?: ReactNode;
    className?: string;
    elevation?: 'low' | 'high';
    rounded?: boolean;
    padding?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>; // Updated to support MouseEvent
    style?: CSSProperties;
}

const Card: React.FC<CardProps> = ({
                                       children,
                                       className = '',
                                       elevation = 'low',
                                       rounded = true,
                                       padding = true,
                                       onClick,
                                       style = {},
                                   }) => {
    const cardClasses = [
        'card',
        elevation === 'high' && 'card--elevated',
        rounded && 'card--rounded',
        padding && 'card--padded',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={cardClasses}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            style={style}
        >
            {children}
        </div>
    );
};

export { Card };
export default Card;