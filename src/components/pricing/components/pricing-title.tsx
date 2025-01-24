import React from 'react';

export const PricingTitle: React.FC<{ text: string }> = ({ text }) => {
    return <h3 className="pricing-title">{text}</h3>;
};

export const PricingSubtitle: React.FC<{ text: string }> = ({ text }) => {
    return <p className="pricing-subtitle">{text}</p>;
};