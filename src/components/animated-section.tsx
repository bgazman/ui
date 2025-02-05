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

    const baseStyles = "transition-all duration-700 transform opacity-0 translate-y-4";
    const visibleStyles = "opacity-100 translate-y-0";

    return (
        <Section
            ref={sectionRef}
            id={id}
            title={title}
            subtitle={subtitle}
            className={`${baseStyles} ${isVisible ? visibleStyles : ""} ${className}`}
            variant={variant}
        >
            {children}
        </Section>
    );
};

export default AnimatedSection;