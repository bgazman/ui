import React, { useState } from 'react';
import { mainNavItems, footerNavItems } from './data/nav-items.ts';
import LandingLayout from '@layout/landing-layout/landing-layout';
import Box from '@components/box';
import AnimatedSection from '@components/animated-section';
import Grid from '@components/grid';
import Hero from './hero.tsx';
import Statistic from "@components/statistic.tsx";
import CTASection from "@pages/home/cta-section.tsx";

import Card from '@components/card';



const Features: React.FC = () => {
    const featureItems = [
        { title: 'Feature One', description: 'Description of feature one.', content: <p>Additional content for feature one.</p> },
        { title: 'Feature Two', description: 'Description of feature two.', content: <p>Additional content for feature two.</p> },
        { title: 'Feature Three', description: 'Description of feature three.', content: <p>Additional content for feature three.</p> },
        { title: 'Feature Four', description: 'Description of feature four.', content: <p>Additional content for feature four.</p> },
        { title: 'Feature Five', description: 'Description of feature five.', content: <p>Additional content for feature five.</p> },
        { title: 'Feature Six', description: 'Description of feature six.', content: <p>Additional content for feature six.</p> },
        { title: 'Feature Seven', description: 'Description of feature seven.', content: <p>Additional content for feature seven.</p> },
        { title: 'Feature Eight', description: 'Description of feature eight.', content: <p>Additional content for feature eight.</p> },
        { title: 'Feature Nine', description: 'Description of feature nine.', content: <p>Additional content for feature nine.</p> },
        { title: 'Feature Ten', description: 'Description of feature ten.', content: <p>Additional content for feature ten.</p> },
        { title: 'Feature Eleven', description: 'Description of feature eleven.', content: <p>Additional content for feature eleven.</p> },
        { title: 'Feature Twelve', description: 'Description of feature twelve.', content: <p>Additional content for feature twelve.</p> },
        { title: 'Feature Thirteen', description: 'Description of feature thirteen.', content: <p>Additional content for feature thirteen.</p> },
        { title: 'Feature Fourteen', description: 'Description of feature fourteen.', content: <p>Additional content for feature fourteen.</p> },
        { title: 'Feature Fifteen', description: 'Description of feature fifteen.', content: <p>Additional content for feature fifteen.</p> },
        { title: 'Feature Sixteen', description: 'Description of feature sixteen.', content: <p>Additional content for feature sixteen.</p> },
    ];

    return (
        <AnimatedSection id='features' title='Our Features' description='Explore the amazing features we offer.' variant='center' className="bg-bg-secondary text-text-secondary text-center">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featureItems.map((item, index) => (
                        <Card key={index} title={item.title} description={item.description}>
                            {item.content}
                        </Card>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

const StatisticsSection: React.FC = () => {
    return (
        <AnimatedSection id='statistics' title='Our Statistics' description='Key metrics that define our success.' className="bg-bg-alt text-text-primary p-4">
            <div className="flex justify-center">
                <Grid columns={3} gap="1.5rem" className="mt-8">
                    <Statistic value="100+" label="Projects Completed" />
                    <Statistic value="50+" label="Happy Clients" />
                    <Statistic value="10" label="Awards Won" />
                </Grid>
            </div>
        </AnimatedSection>
    );
};

const HomePage: React.FC = () => {

    return (
        <LandingLayout
            headerNavItems={mainNavItems}
            footerNavItems={footerNavItems}
            className="bg-bg-primary text-text-primary"
        >
            <Box className="space-y-16 sm:space-y-20">
                <Hero />
                <Features />
                <StatisticsSection />
                <CTASection />
            </Box>
        </LandingLayout>
    );
};

export default HomePage;