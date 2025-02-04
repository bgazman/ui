import React, { useRef, useEffect, useState } from "react";
import Section from "@components/section.tsx";

export interface AnimateSectionProps {
    id?: string;
    title?: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    variant?: "center" | "left";
}

const AnimatedSection: React.FC<AnimateSectionProps> = ({
                                                            id,
                                                            title,
                                                            description,
                                                            children,
                                                            className = "",
                                                            variant = "center",
                                                        }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Track whether we've intersected
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Toggle isVisible based on intersection
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

    // Tailwind classes for text alignment based on variant
    const variantClass = variant === "left" ? "text-left" : "text-center";

    // Base classes for the animated effect
    const baseStyles =
        "transition-all duration-700 transform opacity-0 translate-y-4";

    // Classes to apply when the element is visible
    const visibleStyles = "opacity-100 translate-y-0";

    return (
        <div
            ref={sectionRef}
            id={id}
            // Conditionally apply the "visible" styles
            className={`${baseStyles} ${variantClass} ${
                isVisible ? visibleStyles : ""
            } ${className}`}
        >
            <Section id={id} title={title} description={description}>
                {children}
            </Section>
        </div>
    );
};

export default AnimatedSection;
