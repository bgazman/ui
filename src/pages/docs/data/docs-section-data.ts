import CardExample from '@pages/docs/examples/card-example?raw';
import SectionExample from '@pages/docs/examples/section-example?raw';
import GridExample from '@pages/docs/examples/grid-example?raw';
import ButtonExample from '@pages/docs/examples/button-example?raw';
import TextAreaExample from '@pages/docs/examples/text-area-example?raw';
import BoxExample from '@pages/docs/examples/box-example?raw';
import FormExample from "@pages/docs/examples/form-example?raw";
import InputFieldExample from "@pages/docs/examples/input-field-example?raw";
import TabMenuExample from "@pages/docs/examples/tab-menu-example?raw";
import HorizontalNavigationExample from "@pages/docs/examples/horizontal-navigation-example?raw";
import VerticalNavigationExample from '@pages/docs/examples/vertical-navigation-example?raw';
import LandingLayoutExample from '@pages/docs/examples/landing-layout-example?raw';
import DocsLayoutExample from '@pages/docs/examples/docs-layout-example?raw';
import BadgeExample from "@pages/docs/examples/badge-example.tsx";
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
        id: 'button-component',
        title: 'Button Component',
        description: 'This section provides an example of how to use the Button component.',
        sourceCode: ButtonExample,
    },
    {
        id: 'badge-component',
        title: 'Badge Component',
        description: 'This section provides an example of how to use the Badge component.',
        sourceCode: BadgeExample,
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
        id: 'form-field-component',
        title: 'Input Field Component',
        description: 'This section provides an example of how to use the Input Field component.',
        sourceCode: InputFieldExample,
    },
    {
        id: 'tab-menu-component',
        title: 'Tab Menu Component',
        description: 'This section provides an example of how to use the Tab Menu component.',
        sourceCode: TabMenuExample,
    },
    {
        id: 'horizontal-navigation-component',
        title: 'Horizontal Navigation Component',
        description: 'This section provides an example of how to use Horizontal Navigation component.',
        sourceCode: HorizontalNavigationExample,
    },
    {
        id: 'vertical-navigation-component',
        title: 'Vertical Navigation Component',
        description: 'This section provides an example of how to use Vertical Navigation component.',
        sourceCode: VerticalNavigationExample,
    },
    {
        id: 'landing-layout-component',
        title: 'Landing Page Layout Component',
        description: 'This section provides an example of how to use Landing Page Layout component.',
        sourceCode: LandingLayoutExample,
    },
    {
        id: 'docs-layout-component',
        title: 'Docs Page Layout Component',
        description: 'This section provides an example of how to use Docs Page Layout component.',
        sourceCode: DocsLayoutExample,
    },
];