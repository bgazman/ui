import React from 'react';
import './pricing.css';
import {PricingSubtitle, PricingTitle} from "./pricing-title.tsx";
import {PricingItem, PricingList} from "./pricing-list.tsx";



export type PricingSectionProps = {
    pricingItems: PricingItem[];
};

const PricingSection: React.FC<PricingSectionProps> = ({pricingItems}) => {
    return (
        <section id="pricing" className="pricing-section">
            <div className="pricing-container">
                <PricingTitle text="Pricing"/>
                <PricingSubtitle text="Choose a plan that works for you."/>
                <PricingList pricingItems={pricingItems}/>
            </div>
        </section>
    );
};

export default PricingSection;