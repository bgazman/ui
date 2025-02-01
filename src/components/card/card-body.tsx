import React from 'react';

export interface CardBodyProps {
    description?: string;
    children?: React.ReactNode;
    className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ description, children, className = '' }) => (
    <div className={`card-body ${className}`}>
        {description && <p className="card-body__description">{description}</p>}
        {children}
    </div>
);

export default CardBody;
