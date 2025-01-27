import React from 'react';

export type HeroItem = {
    title: string;
    description: string;
    actionText: string;
    actionLink: string;
};

export type PricingItem = {
    title: string;
    price: string;
    features: string[];
    link: string;
};

export type FeatureItem = {
    title: string;
    description: string;
    benefits: string[];
};

export type MainProps = {
    children: React.ReactNode;
    heroItems: HeroItem[];
    pricingItems: PricingItem[];
    featuresItems: FeatureItem[];
};



const Main: React.FC<MainProps> = ({ children, ...props }) => {
    return (
        <main className="main" {...props}>
            {children}
        </main>
    );
};

export default Main;