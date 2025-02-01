import React from 'react';

export interface CardContainerProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({ className = '', style, children }) => (
    <div className={`card-container ${className}`} style={style}>
        {children}
    </div>
);

export default CardContainer;
