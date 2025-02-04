import React from "react";
import Box from "@components/box.tsx";

export interface SectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    variant?: "center" | "left" | "right"; // Added "right" variant
}

const Section: React.FC<SectionProps> = ({
                                             title,
                                             subtitle,
                                             children,
                                             className = "",
                                             style,
                                             variant = "center", // Default variant
                                         }) => {
    // Determine the text alignment class based on the variant
    const variantClass = variant === "left" ? "text-left" : variant === "right" ? "text-right" : "text-center";

    return (
        <Box as="section" className={`${className} ${variantClass}`} style={style}>
            {(title || subtitle) && (
                <div>
                    {title && <h2>{title}</h2>}
                    {subtitle && <p>{subtitle}</p>}
                </div>
            )}
            <div>{children}</div>
        </Box>
    );
};

export default Section;