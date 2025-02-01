import React from 'react';
import Box from '@components/box';

export interface SectionHeaderProps {
    title?: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
    <Box className="section-header">
        {title && <h2 className="section-header__title">{title}</h2>}
        {description && <p className="section-header__description">{description}</p>}
    </Box>
);

export default SectionHeader;
