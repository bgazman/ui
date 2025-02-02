// FeaturesSection.tsx
import React from 'react';
import Card from '@components/card/card.tsx';
import FlexibleGrid from '@components/grid/flexible-grid.tsx';
import mockMainData from './data/main-data';
import AnimatedSection from "@components/animated-section/animated-section.tsx";

const FeaturesSection: React.FC = () => {


    return (
        <AnimatedSection id='features' >
        <FlexibleGrid minWidth={500} gap="3rem" className="mb-16">
            {mockMainData.heroItems.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    actionLink={item.actionLink}
                    actionText={item.actionText}
                    className={`flex flex-col items-center`}
                />
            ))}
        </FlexibleGrid>
        </AnimatedSection>
    );
};

export default FeaturesSection;
