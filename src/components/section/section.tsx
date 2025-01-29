import React from 'react';
import SectionContainer from './section-container.tsx';
import SectionHeader from './section-header.tsx';
import SectionContent from './section-content.tsx';

interface SectionProps {
    id?: string;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ id, title, description, children, className = '', style }) => (
    <SectionContainer id={id} className={className} style={style}>
        <SectionHeader title={title} description={description} />
        <SectionContent>
            {children}
        </SectionContent>
    </SectionContainer>
);

export default Section;