const cardExampleSource = `
import Card from '@components/card/card';

function CardExample() {
    return (
        <Card title="Card Title" description="This is a description.">
            <div>Card Content</div>
        </Card>
    );
}

export default CardExample;
`;

export interface DocsSection {
    id: string;
    title: string;
    description: string;
    sourceCode: string;
}

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
        id: 'card-component',
        title: 'Card Component',
        description: 'This section provides an example of how to use the Card component.',
        sourceCode: cardExampleSource,
    },
];