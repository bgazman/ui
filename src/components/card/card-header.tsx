import React from 'react';

export interface CardHeaderProps {
    title: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title }) => (
    <h3 className="card-header">{title}</h3>
);

export default CardHeader;
