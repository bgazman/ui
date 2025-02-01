// CardHeader.tsx
import React from 'react';

interface CardHeaderProps {
    title: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title }) => (
    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{title}</h3>
);

export default CardHeader;
