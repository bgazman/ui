import React from 'react';
import Box from '@components/box';

export interface SectionContentProps {
    children?: React.ReactNode;
}

const SectionContent: React.FC<SectionContentProps> = ({ children }) => (
    <Box className="section-content">
        <Box className="section-content-inner">{children}</Box>
    </Box>
);

export default SectionContent;
