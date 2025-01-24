import React from 'react';
import {PricingCard} from './pricing-card.tsx';

export type PricingItem = {
    title: string,
    price: string,
    features: string[],
    link: string,
}

export interface PricingListProps {
    pricingItems: PricingItem[];
}

export const PricingList: React.FC<PricingListProps> = ({pricingItems}) => {
    return (
        <div className="pricing-list">
            {pricingItems.map((item, index) => (
                <PricingCard
                    key={index}
                    pricingItem={item}
                />
            ))}
        </div>
    );
};