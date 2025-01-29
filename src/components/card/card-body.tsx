import React from 'react';

interface CardBodyProps {
    description?: string;
    children?: React.ReactNode;
    className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ description, children, className = '' }) => (
    <div className={`text-[var(--text-color)] mt-2 ${className}`}>
        {description && <p className="mb-2">{description}</p>}
        {children}
    </div>
);

export default CardBody;
