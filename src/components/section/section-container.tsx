import React from 'react';
import Box from '@components/box.tsx';

interface SectionContainerProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, className = '', style, children }) => (
    <Box
        as="section"
        id={id}
        className={`w-full px-4 sm:px-8 lg:px-16 ${className}`}
        style={{ ...style, width: '100%', margin: '0 auto' }}
    >
        {children}
    </Box>
);

export default SectionContainer;