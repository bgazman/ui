import React from 'react';
import LinkButton from '@components/link-button';

interface CardProps {
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
}) => (
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
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
        {children}
        {actionLink && actionText && (
            <LinkButton href={actionLink} className="mt-4">
                {actionText}
            </LinkButton>
        )}
    </div>
);

export default Card;