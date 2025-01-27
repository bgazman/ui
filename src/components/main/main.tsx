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
    className?: string;
};

const Main: React.FC<MainProps> = ({ children, heroItems, }) => {
    return (
        <main className="main">
            {heroItems.map((item, index) => (
                <section key={index} className="intro">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <a href={item.actionLink}>{item.actionText}</a>
                </section>
            ))}
            {children}
        </main>
    );
};

export default Main;