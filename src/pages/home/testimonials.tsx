// TestimonialCard.tsx
import AnimatedSection from "@components/animated-section.tsx";

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    company: string;
}

const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => (
    <div className="bg-bg-secondary p-lg rounded-lg border border-border">
        <p className="text-text-secondary mb-md italic">"{quote}"</p>
        <div className="text-text-primary font-semibold">{author}</div>
        <div className="text-text-secondary text-sm">{role}, {company}</div>
    </div>
);

export default TestimonialCard;

import Section from '@components/section.tsx';
// TestimonialsSection.tsx
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => (
    <AnimatedSection id={"testimonials"} title={"Testimonials"} subtitle={"What Our Clients Say"} description={""}>
        <div className="max-w-7xl mx-auto px-md">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-lg">
                What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
                <TestimonialCard
                    quote="Their team delivered exceptional results that exceeded our expectations."
                    author="Sarah Johnson"
                    role="CTO"
                    company="Tech Innovators Inc"
                />
                <TestimonialCard
                    quote="The level of expertise and professionalism is unmatched."
                    author="Michael Chen"
                    role="Director of Engineering"
                    company="Global Systems"
                />
                <TestimonialCard
                    quote="A game-changer for our business operations."
                    author="Emily Rodriguez"
                    role="CEO"
                    company="Future Solutions"
                />
            </div>
        </div>
    </AnimatedSection>
);