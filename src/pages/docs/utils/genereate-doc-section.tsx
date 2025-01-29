import {DocsSection} from "@pages/docs/data/docs-section-data.ts";

function generateDocsSection(componentCode: string): DocsSection {
    // Helper function to extract component name from the code
    const getComponentName = (code: string): string => {
        const matches = code.match(/const\s+(\w+)(?=\s*:)/);
        return matches ? matches[1] : 'Component';
    };

    // Helper function to extract component description from props
    const getDescription = (code: string): string => {
        const descriptionMatch = code.match(/description="([^"]+)"/);
        return descriptionMatch
            ? descriptionMatch[1]
            : 'A React component example';
    };

    // Generate unique ID based on component name
    const generateId = (name: string): string => {
        return name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
    };

    const componentName = getComponentName(componentCode);

    const docsSection: DocsSection = {
        id: generateId(componentName),
        title: componentName,
        description: getDescription(componentCode),
        sourceCode: componentCode
    };

    return docsSection;
}

// Example usage:
const sampleCode = `import React from 'react';
import Card from '@components/card/card';

const CardExample: React.FC = () => (
    <Card title="Card Title" description="This is a description.">
        <div>Card Content</div>
    </Card>
);

export default CardExample;`;

const generatedSection = generateDocsSection(sampleCode);
console.log(generatedSection);

/* Output:
{
    id: 'card-example',
    title: 'CardExample',
    description: 'This is a description.',
    sourceCode: [original source code]
}
*/

export { generateDocsSection };