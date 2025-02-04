import React from "react";

interface CardProps {
    title?: string;
    description?: string;
    image?: string;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, footer, children }) => {
    return (
        <div className="bg-bg-alt1 text-text-primary border border-border rounded-md p-4 shadow-md w-64">
            <div className="mb-4">
                {title && (
                    <h3 className="text-lg font-bold mb-2">
                        {title}
                    </h3>
                )}
                {description && (
                    <p className="text-md mb-2">
                        {description}
                    </p>
                )}
                {children}
            </div>
            {footer && (
                <div className="mt-4 border-t border-border pt-2">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;