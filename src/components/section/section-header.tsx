// SectionHeader.tsx
import React from 'react';
import Box from '@components/box.tsx';

interface SectionHeaderProps {
    title?: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
    <Box className="mb-[var(--spacing-lg)]">
        {title && (
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {title}
            </h2>
        )}
        {description && (
            <p className="text-lg sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
                {description}
            </p>
        )}
    </Box>
);

export default SectionHeader;
