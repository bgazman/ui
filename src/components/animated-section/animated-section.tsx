import React, { useRef, useEffect } from 'react';
import Section from '@components/section/section';

export interface AnimateSectionProps {
    id: string;
    title?: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'center' | 'left';
}

const AnimatedSection: React.FC<AnimateSectionProps> = ({
                                                            id,
                                                            title,
                                                            description,
                                                            children,
                                                            className = '',
                                                            variant = 'center',
                                                        }) => {
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
            { threshold: 0.1, rootMargin: '0px' }
        );

        observer.observe(section);

        return () => {
            observer.unobserve(section);
        };
    }, [id]);

    const variantClass = variant === 'left'
        ? 'animated-section--left'
        : 'animated-section--center';

    return (
        <div ref={sectionRef} id={id} className={`animated-section ${variantClass} ${className}`}>
            <Section id={id} title={title} description={description}>
                {children}
            </Section>
        </div>
    );
};

export default AnimatedSection;
