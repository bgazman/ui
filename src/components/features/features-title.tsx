import React from 'react';

interface FeaturesTitleProps {
    text: string; // The title text to display
}

export const FeaturesTitle: React.FC<FeaturesTitleProps> = ({ text }) => {
    return <h3 className="features-title">{text}</h3>;
};