// Features.tsx
import React from 'react';
import Card from '@components/card/card.tsx';
import mockMainData from '../data/main-data.ts';
import AnimatedSection from "@components/animated-section/animated-section.tsx";
import Grid from "@components/grid/grid.tsx";

const Features: React.FC = () => {


    return (
        <AnimatedSection id='features' >
        <Grid columns={3} >
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
        </Grid>
        </AnimatedSection>
    );
};

export default Features;
