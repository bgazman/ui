import React from 'react';
import Box from '@components/box'; // Import the Box component

interface SectionProps {
    id?: string;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({
                                             id,
                                             title,
                                             description,
                                             children,
                                             className = '',
                                             style,
                                         }) => (
    <Box
        as="section"
        id={id}
        className={`w-full px-4 py-12 ${className}`}
        style={style}
    >
        <Box
            className={`mx-auto ${
                id === 'features' ? 'w-full' : 'max-w-7xl'
            } text-center mb-12`}
        >
            {(title || description) && (
                <Box className="mb-8">
                    {title && <h2 className="text-3xl font-bold text-gray-900">{title}</h2>}
                    {description && <p className="mt-4 text-lg text-gray-600">{description}</p>}
                </Box>
            )}
            <Box className="flex flex-wrap gap-6 justify-center">{children}</Box>
        </Box>
    </Box>
);


export default Section;
