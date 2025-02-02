import React from 'react';
import Button from '@components/button/button';
import '@components/card/card.css';

export interface CardProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    actionLink?: string;
    actionText?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
                                       title,
                                       description,
                                       children,
                                       actionLink,
                                       actionText,
                                       className = '',
                                       style,
                                   }) => {
    return (
        <div className={`card ${className}`} style={style}>
            {/* Header */}
            <div className="card__header">
                {title}
            </div>

            {/* Body */}
            <div className="card__body">
                {description && <p className="card__body-description">{description}</p>}
                {children}
            </div>

            {/* Footer */}
            {actionLink && actionText && (
                <div className="card__footer">
                    <Button onClick={() => (window.location.href = actionLink)}>
                        {actionText}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Card;
