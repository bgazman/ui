import React, { useRef, useEffect, useState } from "react";
import Section from "@components/section.tsx";

export interface AnimateSectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    variant?: "center" | "left" | "right";
}

const AnimatedSection: React.FC<AnimateSectionProps> = ({
    id,
    title,
    subtitle,
    children,
    className = "",
    variant = "center",
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px" }
        );

        observer.observe(sectionEl);
        return () => observer.unobserve(sectionEl);
    }, [id]);



    return (
        <Section
            ref={sectionRef}
            id={id}
            title={title}
            subtitle={subtitle}
            className='default'
        >
            {children}
        </Section>
    );
};

export default AnimatedSection;