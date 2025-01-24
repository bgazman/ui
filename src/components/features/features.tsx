import React from 'react';
import {FeaturesTitle} from "./components/features-title.tsx";
import {FeaturesSubtitle} from "./components/features-subtitle.tsx";
import {FeaturesList} from "./components/features-list.tsx";
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