import React from 'react';
import './hero.css';
import HeroCard from "./hero-card.tsx";
export type HeroItem ={
    title: string;
    description: string;
    actionLink: string;
    actionText: string;
}

export interface HeroSectionProps {
    heroItems: HeroItem[];
}
const HeroSection: React.FC<HeroSectionProps> = ({ heroItems }) => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {heroItems.map((item, index) => (
                        <HeroCard key={index} heroItems={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;