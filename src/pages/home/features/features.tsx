import React from 'react';
import {Card} from '@components/card.tsx';
import mockMainData from '../data/main-data.ts';
import AnimatedSection from "@components/animated-section.tsx";
import Grid from "@components/grid.tsx";

const Features: React.FC = () => {


    return (
        <AnimatedSection id='features' >
        <Grid columns={3}  >
            {mockMainData.heroItems.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    className={`flex flex-col items-center`}
                />
            ))}
        </Grid>
        </AnimatedSection>
    );
};

export default Features;
