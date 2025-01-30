import CardExample from '@pages/docs/examples/card-example?raw';
import SectionExample from '@pages/docs/examples/section-example?raw';
import GridExample from '@pages/docs/examples/grid-example?raw';
import ButtonExample from '@pages/docs/examples/button-example?raw';
import TextAreaExample from '@pages/docs/examples/text-area-example?raw';
import BoxExample from '@pages/docs/examples/box-example?raw';
import FormExample from "@pages/docs/examples/form-example?raw";
import InputFieldExample from "@pages/docs/examples/input-field-example?raw";
import NavigationExample from "@pages/docs/examples/navigation-examples?raw";
import TabMenuExample from "@pages/docs/examples/tab-menu-example?raw";

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
        sourceCode: CardExample,
    },
    {
        id: 'section-component',
        title: 'Section Component',
        description: 'This section provides an example of how to use the Section component.',
        sourceCode: SectionExample,
    },
    {
        id: 'grid-component',
        title: 'Grid Component',
        description: 'This section provides an example of how to use the Grid component.',
        sourceCode: GridExample,
    },
    {
        id: 'button-component-1',
        title: 'Button Component',
        description: 'This section provides an example of how to use the Button component.',
        sourceCode: ButtonExample,
    },
    {
        id: 'text-area-component',
        title: 'Text Area Component',
        description: 'This section provides an example of how to use the Text Area component.',
        sourceCode: TextAreaExample,
    },
    {
        id: 'box-component',
        title: 'Box Component',
        description: 'This section provides an example of how to use the Box component.',
        sourceCode: BoxExample,
    },
    {
        id: 'form-component',
        title: 'Form Component',
        description: 'This section provides an example of how to use the Form component.',
        sourceCode: FormExample,
    },
    {
        id: 'input-field-component',
        title: 'Input Field Component',
        description: 'This section provides an example of how to use the Input Field component.',
        sourceCode: InputFieldExample,
    },
    {
        id: 'button-component-2',
        title: 'Button Component',
        description: 'This section provides an example of how to use the Button component.',
        sourceCode: ButtonExample,
    },
    {
        id: 'tab-menu-component',
        title: 'Tab Menu Component',
        description: 'This section provides an example of how to use the Tab Menu component.',
        sourceCode: TabMenuExample,
    },
    {
        id: 'navigation-component',
        title: 'Navigation Component',
        description: 'This section provides an example of how to use the Navigation component.',
        sourceCode: NavigationExample,
    },
];