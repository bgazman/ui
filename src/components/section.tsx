import React, { forwardRef } from "react";
import Box from "@components/box.tsx";

export interface SectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    variant?: "center" | "left" | "right";
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({
    id,
    title,
    subtitle,
    children,
    className = "",
    style,
    variant = "center",
}, ref) => {
    const variantClass = variant === "left" ? "text-left" : variant === "right" ? "text-right" : "text-center";
    const spacingClasses = "p-md md:p-lg lg:p-xl"; // Using Tailwind CSS variables for padding

    return (
        <Box as="section" id={id} ref={ref} className={`${spacingClasses} ${className} ${variantClass}`} style={style}>
            {(title || subtitle) && (
                <div className="mb-lg"> {/* Adding margin-bottom for spacing */}
                    {title && <h2 className="text-2xl font-bold mb-sm">{title}</h2>}
                    {subtitle && <p className="text-lg mb-sm">{subtitle}</p>}
                </div>
            )}
            <div>{children}</div>
        </Box>
    );
});

export default Section;