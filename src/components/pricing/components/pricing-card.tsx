import React from 'react';
import {PricingItem} from "./pricing-list";

export interface PricingCardProps {
    pricingItem: PricingItem;

}

export const PricingCard: React.FC<PricingCardProps> = ({pricingItem}) => {
    return (
        <div className="pricing-card">
            <div className="pricing-content">
                <h4 className="pricing-plan-title">{pricingItem.title}</h4>
                <p className="pricing-plan-price">{pricingItem.price}</p>
                <ul className="pricing-plan-features">
                    <h1>{pricingItem.features}</h1>
                </ul>
                <a href={pricingItem.link} className="choose-plan-btn">Choose Plan</a>
            </div>
        </div>
    );
};