import Box from '@components/box';
import Section from '@components/section/section';
import React, { useEffect, useRef } from "react";

interface AnimateSectionProps {
    id: string;
    title?: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'center' | 'left';
}

const AnimatedSection: React.FC<AnimateSectionProps> = ({ id, title, description, children, className = '', variant = 'center' }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.add('visible');
                    } else {
                        section.classList.remove('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px'
            }
        );

        observer.observe(section);

        return () => {
            observer.unobserve(section);
        };
    }, [id]);

    const variantClass = variant === 'left' ? 'text-left' : 'text-center';

    return (
        <div ref={sectionRef} id={id} className={`section ${variantClass} transform transition-all duration-700 opacity-0 translate-y-4 ${className}`}>
            <Section id={id} title={title} description={description}>
                {children}
            </Section>
        </div>
    );
};

export default AnimatedSection;