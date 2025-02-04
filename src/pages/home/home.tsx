import React from 'react';
import { mainNavItems, footerNavItems } from './data/nav-items.ts';
import LandingLayout from '@layout/landing-layout/landing-layout';
import Box from '@components/box';
import AnimatedSection from '@components/animated-section';
import Grid from '@components/grid';
import Hero from './hero.tsx';
import Statistic from "@components/statistic.tsx";
import CTASection from "@pages/home/cta-section.tsx";

// const ComponentExamples: React.FC = () => {
//     const cards = Array.from({ length: 9 }, (_, index) => (
//         <Card key={index}>
//             <h3 className="text-lg font-bold">Card Example {index + 1}</h3>
//             <p className="text-md">This is an example of a default card.</p>
//         </Card>
//     ));
//
//     return (
//         <AnimatedSection id='component-examples' title='Component Examples' description='Explore our various components in action.'
//                          className="bg-bg-alt2 text-text-primary p-4">
//             <div className="flex justify-center">
//                 <Grid columns={3} gap="1.5rem" className="mt-8">
//                     {cards}
//                 </Grid>
//             </div>
//         </AnimatedSection>
//     );
// };


const Features: React.FC = () => {
    return (
        <AnimatedSection id='features' title='Our Features' description='Explore the amazing features we offer.' variant='center' className="bg-bg-secondary text-text-secondary">
            <div className="feature-item">
                <h3 className="feature-title text-xl font-bold">Feature One</h3>
                <p className="feature-description">Description of feature one.</p>
            </div>
            <div className="feature-item">
                <h3 className="feature-title text-xl font-bold">Feature Two</h3>
                <p className="feature-description">Description of feature two.</p>
            </div>
            <div className="feature-item">
                <h3 className="feature-title text-xl font-bold">Feature Three</h3>
                <p className="feature-description">Description of feature three.</p>
            </div>
        </AnimatedSection>
    );
};


// Add this new section to the HomePage component
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
                <StatisticsSection /> {/* Add the new section here */}
                <CTASection />
            </Box>
        </LandingLayout>
    );
};

export default HomePage;