import React from 'react';
import Section from '@components/section/section.tsx';
import Card from '@components/card/card.tsx';
import FlexibleGrid from '@components/flexible-grid';
import mockMainData from './data/main-data';

const FeaturesSection: React.FC = () => {
    const cardClassName = "custom-card-class";
    const cardStyle = {
        border: '2px solid var(--border-color)',
        width: '100%', // Ensure the card takes full width of the grid item
        height: '100%' // Ensure the card takes full height of the grid item
    };

    return (
        <Section
            id="features"
            title="Explore Our Features"
            description="Learn about the amazing features we provide through these cards."
            className="py-12 px-4"
            style={{ maxWidth: '1200px', margin: '0 auto' }} // Ensure this matches the AboutUs component
        >
            <FlexibleGrid minWidth={300} gap="3rem" className="mb-16">
                {mockMainData.heroItems.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        actionLink={item.actionLink}
                        actionText={item.actionText}
                        className={`flex flex-col ${cardClassName}`}
                        style={cardStyle}
                    />
                ))}
            </FlexibleGrid>
        </Section>
    );
};

export default FeaturesSection;