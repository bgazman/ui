import React from "react";
import Box from "@components/box.tsx";

export interface SectionProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({
                                             title,
                                             subtitle,
                                             children,
                                             className = "",
                                             style,
                                         }) => {
    return (
        <Box as="section" className={`section ${className}`} style={style}>
            {(title || subtitle) && (
                <div className="section__header">
                    {title && <h2 className="section__title">{title}</h2>}
                    {subtitle && <p className="section__subtitle">{subtitle}</p>}
                </div>
            )}
            <div className="section__content">{children}</div>
        </Box>
    );
};

export default Section;
