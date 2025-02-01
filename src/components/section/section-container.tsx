import React from 'react';
import Box from '@components/box';

export interface SectionContainerProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
                                                               id,
                                                               className = '',
                                                               style,
                                                               children,
                                                           }) => (
    <Box as="section" id={id} className={`section-container ${className}`} style={style}>
        {children}
    </Box>
);

export default SectionContainer;
