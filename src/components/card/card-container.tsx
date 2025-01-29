import React from 'react';

interface CardContainerProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({ className = '', style, children }) => (
    <div
        className={`
            w-full h-auto p-6 rounded-lg shadow-md 
            border-2 border-[var(--border-color)] 
            bg-[var(--card-bg)] text-[var(--text-color)] 
            hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] 
            ${className}
        `}
        style={style}
    >
        {children}
    </div>
);

export default CardContainer;
