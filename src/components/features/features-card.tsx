import React from 'react';

interface FeaturesCardProps {
    title: string;
    description: string;
    benefits?: string[];
}

export const FeaturesCard: React.FC<FeaturesCardProps> = ({ title, description, benefits }) => {
    return (
        <div className="feature-card">
            <div className="feature-card-container">
                <h4 className="feature-card-title">{title}</h4>
                <p className="feature-card-description">{description}</p>
                {benefits && benefits.length > 0 && (
                    <ul className="feature-card-benefits">
                        {benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};