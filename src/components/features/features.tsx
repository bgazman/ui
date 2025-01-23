import React from 'react';
import './features.css';
import {FeaturesTitle} from "./features-title.tsx";
import {FeaturesSubtitle} from "./features-subtitle.tsx";
import {FeaturesList} from "./features-list.tsx";
export type FeaturesItem = {
    title: string;
    description: string;
    benefits: string[];
};


export type FeaturesSectionProps =  {
    featuresItems: FeaturesItem[];
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({featuresItems}) => {
    return (
        <section id="features" className="features-section">
            <div className="features-container">
            <FeaturesTitle text="Features"/>
            <FeaturesSubtitle text="Our platform offers everything you need to succeed."/>
            <FeaturesList featuresItems={featuresItems}/>
            </div>
        </section>
    );
};

export default FeaturesSection;