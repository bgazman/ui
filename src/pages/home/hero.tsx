import React from 'react';
import Box from '@components/box';
import AnimatedSection from '@components/animated-section';
import Button from '@components/button.tsx';
import ComponentPreview from '@components/component-preview.tsx';
import { ChevronRight, Code, Workflow, Lock } from "lucide-react";
import GridExample from '@pages/docs/examples/grid-example?raw';

const Hero: React.FC = () => {
    const features = [
        { icon: Code, label: '99.9% Uptime' },
        { icon: Workflow, label: 'Agile Process' },
        { icon: Lock, label: 'Enterprise Security' }
    ];

    const sourceCode = `
function optimizePerformance(code) {
  const analysis = performStaticAnalysis(code);
  const optimized = applyOptimizations(analysis);
  return deployToProduction(optimized);
}

// Implementing next-gen solutions
const result = optimizePerformance(
  customerCode
);`;

    return (
        <AnimatedSection
            id="hero"
            description="We craft innovative software solutions that transform businesses and drive growth."
            className="bg-bg-primary text-text-primary py-xl"
        >
            <div className="max-w-7xl mx-auto px-md lg:px-lg">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight p-5">Building Tomorrow's Solutions Today</h1>
                <div className="grid lg:grid-cols-2 gap-lg items-center mt-8">
                    <Box className="space-y-lg text-center lg:text-left">
                        <p className="text-text-secondary text-xl">
                            Our expert team delivers cutting-edge technology with enterprise-grade reliability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-md justify-center lg:justify-start">
                            <Button
                                variant="primary"
                                className="bg-button hover:bg-button-hover text-button-text px-lg py-md rounded-lg font-semibold flex items-center justify-center gap-sm"
                            >
                                Get Started
                                <ChevronRight size={20} />
                            </Button>

                            <Button
                                variant="secondary"
                                className="bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-text px-lg py-md rounded-lg font-semibold"
                            >
                                View Our Work
                            </Button>
                        </div>

                        <div className="mt-xl grid grid-cols-3 gap-md">
                            {features.map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-sm">
                                    <item.icon className="text-button" size={24} />
                                    <span className="text-text-tertiary text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </Box>

                    <ComponentPreview title="Code Example" description="Example of performance optimization code" sourceCode={sourceCode}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-button rounded-lg opacity-10 blur-2xl"></div>
                            <div className="relative bg-bg-secondary p-lg rounded-lg border border-border">
                                <pre className="text-left font-mono text-sm text-text-secondary overflow-x-auto">
                                    <code>{GridExample}</code>
                                </pre>
                            </div>
                        </div>
                    </ComponentPreview>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Hero;