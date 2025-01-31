import React from 'react';
import Card from '@components/card/card.tsx';
import FlexibleGrid from '@components/grid/flexible-grid.tsx';
import mockMainData from './data/main-data';

const FeaturesSection: React.FC = () => {
    const cardClassName = "custom-card-class";
    const cardStyle = {
        border: '2px solid var(--border-color)',
        width: '100%', // Ensure the card takes full width of the grid item
        height: '100%' // Ensure the card takes full height of the grid item
    };

    return (
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
    );
};

export default FeaturesSection;