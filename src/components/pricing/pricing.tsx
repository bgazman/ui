import React from 'react';
import {PricingSubtitle, PricingTitle} from "./components/pricing-title";
import {PricingItem, PricingList} from "./components/pricing-list";



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