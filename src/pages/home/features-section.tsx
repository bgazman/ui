// FeaturesSection.tsx
import React from 'react';
import Card from '@components/card/card.tsx';
import FlexibleGrid from '@components/grid/flexible-grid.tsx';
import mockMainData from './data/main-data';

const FeaturesSection: React.FC = () => {
    const cardClassName = 'custom-card-class';
    const cardStyle = {
        border: '2px solid var(--border-color)',
        width: '100%',
        height: '100%',
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
