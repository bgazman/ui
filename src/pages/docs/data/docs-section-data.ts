import { generateDocsSection } from '@pages/docs/utils/genereate-doc-section';
import CardExample from '@pages/docs/examples/card-example';
import SectionExample from '@pages/docs/examples/section-example';
import GridExample from '@pages/docs/examples/grid-example';
import ButtonExample from '@pages/docs/examples/button-example';
import TextAreaExample from '@pages/docs/examples/text-area-example';

export interface DocsSection {
    id: string;
    title: string;
    description: string;
    sourceCode: string;
}

const cardExampleCode = `
import React from 'react';
import Card from '@components/card/card';

const CardExample: React.FC = () => (
    <Card title="Card Title" description="This is a description.">
        <div>Card Content</div>
    </Card>
);

export default CardExample;
`;

const sectionExampleCode = `
import React from 'react';
import Section from '@components/section/section';

const SectionExample: React.FC = () => (
    <Section id="example-section" title="Example Section" description="This is an example section.">
        <div>Section Content</div>
    </Section>
);

export default SectionExample;
`;

const gridExampleCode = `
import React from 'react';
import Grid from '@components/grid/grid';

const GridExample: React.FC = () => (
    <Grid>
        <div>Grid Item 1</div>
        <div>Grid Item 2</div>
        <div>Grid Item 3</div>
    </Grid>
);

export default GridExample;
`;

const buttonExampleCode = `
import React from 'react';
import Button from '@components/button/button';

const ButtonExample: React.FC = () => (
    <div className="button-examples">
        <Button onClick={() => alert('Primary Button clicked!')} variant="primary" size="md">Primary Button</Button>
        <Button onClick={() => alert('Secondary Button clicked!')} variant="secondary" size="md">Secondary Button</Button>
        <Button onClick={() => alert('Disabled Button clicked!')} variant="disabled" size="md" disabled>Disabled Button</Button>
        <Button onClick={() => alert('Large Button clicked!')} variant="primary" size="lg">Large Button</Button>
        <Button onClick={() => alert('Small Button clicked!')} variant="primary" size="sm">Small Button</Button>
    </div>
);

export default ButtonExample;
`;

const textAreaExampleCode = `
import React from 'react';
import TextArea from '@components/text-area/text-area';

const TextAreaExample: React.FC = () => (
    <TextArea placeholder="Enter text here..." />
);

export default TextAreaExample;
`;

export const docsSectionList: DocsSection[] = [
    {
        id: 'introduction',
        title: 'Introduction',
        description: 'Welcome to our component library. This guide will help you get started with our UI components.',
        sourceCode: '',
    },
    {
        id: 'installation',
        title: 'Installation',
        description: 'Learn how to install and set up the component library in your project.',
        sourceCode: '',
    },
    {
        id: 'quick-start',
        title: 'Quick Start',
        description: 'Get up and running quickly with our component library.',
        sourceCode: '',
    },
    {
        ...generateDocsSection(cardExampleCode),
        id: 'card-component'
    },
    {
        ...generateDocsSection(sectionExampleCode),
        id: 'section-component'
    },
    {
        ...generateDocsSection(gridExampleCode),
        id: 'grid-component'
    },
    {
        ...generateDocsSection(buttonExampleCode),
        id: 'button-component'
    },
    {
        ...generateDocsSection(textAreaExampleCode),
        id: 'text-area-component'
    },
];