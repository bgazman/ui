import React from 'react';

interface CardContainerProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({ className = '', style, children }) => (
    <div
        className={`p-6 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
        style={{
            ...style,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid var(--border-color)',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
        }}
    >
        {children}
    </div>
);

export default CardContainer;