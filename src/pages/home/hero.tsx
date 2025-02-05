import React from 'react';
import Box from '@components/box';
import AnimatedSection from '@components/animated-section';
import Button from '@components/button.tsx';
import ComponentPreview from '@components/component-preview.tsx';
import { ChevronRight, Code, Workflow, Lock } from "lucide-react";
import GridExample from '@pages/docs/examples/grid-example';
import gridExampleSource from '@pages/docs/examples/grid-example?raw';

const Hero: React.FC = () => {
    const features = [
        { icon: Code, label: '99.9% Uptime' },
        { icon: Workflow, label: 'Agile Process' },
        { icon: Lock, label: 'Enterprise Security' }
    ];

    return (
        <AnimatedSection
            id="hero"
            description="We craft innovative software solutions that transform businesses and drive growth."
            className="bg-bg-primary text-text-primary py-xl bg-hero-pattern bg-cover bg-center"
        >
            <div className="max-w-7xl mx-auto px-md lg:px-lg">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight p-5">Building Tomorrow's Solutions Today</h1>
                <h2 className="text-2xl lg:text-3xl font-medium leading-tight p-5 text-text-secondary">Innovative, Reliable, Secure</h2>
                <div className="grid lg:grid-cols-2 gap-lg items-center mt-8">
                    <Box className="space-y-lg text-center lg:text-left p-5 lg:p-10">
                        <p className="text-text-secondary text-xl lg:text-2xl">
                            Our expert team delivers cutting-edge technology with enterprise-grade reliability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-md justify-center lg:justify-start mt-5">
                            <Button
                                variant="primary"
                                className="bg-button hover:bg-button-hover text-button-text px-lg py-md rounded-lg font-semibold flex items-center justify-center gap-sm transition-transform transform hover:scale-105"
                            >
                                Get Started
                                <ChevronRight size={20} />
                            </Button>

                            <Button
                                variant="secondary"
                                className="bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-text px-lg py-md rounded-lg font-semibold transition-transform transform hover:scale-105"
                            >
                                View Our Work
                            </Button>
                        </div>

                        <div className="mt-xl grid grid-cols-3 gap-md">
                            {features.map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-sm animate-fade-in">
                                    <item.icon className="text-button" size={24} />
                                    <span className="text-text-tertiary text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </Box>

                    <ComponentPreview title="Code Example" description="Example of performance optimization code" sourceCode={gridExampleSource}>
                        <GridExample />
                    </ComponentPreview>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Hero;