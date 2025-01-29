import React from 'react';
import Section from '@components/section/section';

const SectionExample: React.FC = () => (
    <Section id="example-section" title="Example Section" description="This is an example section.">
        <div>Section Content</div>
    </Section>
);

export default SectionExample;