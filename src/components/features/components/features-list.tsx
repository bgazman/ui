import React from 'react';
import {FeaturesCard} from './features-card';
import {FeaturesItem} from "../features";

export type FeaturesListProps = {
    featuresItems: FeaturesItem[];
};




export const FeaturesList: React.FC<FeaturesListProps> = ({featuresItems}) => {
    return (
        <div className="features-list">
            {featuresItems.map((feature, index) => (
                <FeaturesCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    benefits={feature.benefits}
                />
            ))}
        </div>
    );
};