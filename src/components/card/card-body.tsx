import React from 'react';

interface CardBodyProps {
    description?: string;
    children?: React.ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({ description, children }) => (
    <>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
        {children}
    </>
);

export default CardBody;