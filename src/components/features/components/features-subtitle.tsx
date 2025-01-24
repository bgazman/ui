import React from 'react';

interface FeaturesSubtitleProps {
    text: string; // The subtitle text to display
}

export const FeaturesSubtitle: React.FC<FeaturesSubtitleProps> = ({ text }) => {
    return <p className="features-subtitle">{text}</p>;
};