import React from 'react';

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
        className={`p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
        style={style}
    >
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
        {children}
        {actionLink && actionText && (
            <a href={actionLink} className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                {actionText}
            </a>
        )}
    </div>
);

export default Card;
