import React from 'react';
import Box from '@components/box';

interface SectionContentProps {
    children?: React.ReactNode;
}

const SectionContent: React.FC<SectionContentProps> = ({ children }) => (
    <Box className="w-full h-full bg-cover bg-center bg-no-repeat">
        <Box className="mx-auto w-full mb-12">
            {children}
        </Box>
    </Box>
);

export default SectionContent;