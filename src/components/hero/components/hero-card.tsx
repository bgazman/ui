import React from "react";
import HeroButton from "./hero-btn";
import {HeroItem} from "../hero";
export interface HeroCardProps {
    heroItems: HeroItem;
}
const HeroCard: React.FC<HeroCardProps> = ({ heroItems }) => {
    return (
        <div className="hero-card">
            <h2 className="hero-title">{heroItems.title}</h2>
            <p className="hero-description">{heroItems.description}</p>
            <HeroButton link={heroItems.actionLink} text={heroItems.actionText} />
        </div>
    );
};

export default HeroCard;