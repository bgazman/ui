import { Box } from "lucide-react";
import {useEffect, useRef } from "react";
interface AnimateSectionProps {
    id: string;
    children: React.ReactNode;
}
const AnimatedSection: React.FC<AnimateSectionProps> = ({ id, children }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.add('visible');
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
    }, []);

    return (
        <div ref={sectionRef} id={id} className="section text-center transform transition-all duration-700 opacity-0 translate-y-4">
            <Box className="w-full">
                {children}
            </Box>
        </div>
    );
};

export default AnimatedSection;