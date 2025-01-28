import React from 'react';
import DocsLayout from '@layout/docs-layout';
import { mockHeaderData } from '@pages/docs/data/header-data.ts';
import { footerMockData } from '@pages/home/data/footer-data.ts';
import { mockSidebarData } from '@pages/docs/data/sidebar-data.ts';
import Section from '@components/section.tsx';
import ComponentPreview from '@components/component-preview.tsx';

const DocsPage: React.FC = () => {
    const layoutConfig = {
        header: {
            height: '4rem',
            position: 'sticky' as const,
        },
        main: {
            maxWidth: '90%',
            padding: 'px-6',
        },
        footer: {
            height: '4rem',
            position: 'relative' as const,
        },
        sidebar: {
            width: '16rem',
            position: 'sticky' as const,
        },
    };

    return (
        <div data-theme="light"> {/* Set the desired theme here */}
            <DocsLayout
                headerData={mockHeaderData}
                footerData={footerMockData}
                layoutConfig={layoutConfig}
                sidebarMenuItems={mockSidebarData.sideBarMenuItems}
            >
                <div className="prose max-w-none text-left">
                    <h1>Welcome to the Documentation</h1>
                    <p>Learn how to build amazing applications with our components and tools.</p>

                    <Section id="introduction" title="Introduction" className="text-left">
                        <p>Introduction content goes here.</p>
                    </Section>

                    <Section id="installation" title="Installation" className="text-left">
                        <p>Installation instructions go here.</p>
                    </Section>

                    <Section id="quick-start" title="Quick Start" className="text-left">
                        <p>Get up and running with our library in minutes.</p>
                        <pre>
                            <code>npm install @your-library/components</code>
                        </pre>
                    </Section>

                    <Section id="layout" title="Layout" className="text-left">
                        <ComponentPreview sourceCode={`<Layout />`}>
                            <p>Layout component details go here.</p>
                        </ComponentPreview>
                    </Section>

                    <Section id="navigation" title="Navigation" className="text-left">
                        <ComponentPreview sourceCode={`<Navigation />`}>
                            <p>Navigation component details go here.</p>
                        </ComponentPreview>
                    </Section>

                    <Section id="forms" title="Forms" className="text-left">
                        <ComponentPreview sourceCode={`<Forms />`}>
                            <p>Forms component details go here.</p>
                        </ComponentPreview>
                    </Section>

                    <Section id="data-display" title="Data Display" className="text-left">
                        <ComponentPreview sourceCode={`<DataDisplay />`}>
                            <p>Data Display component details go here.</p>
                        </ComponentPreview>
                    </Section>

                    <Section id="hooks" title="Hooks" className="text-left">
                        <ComponentPreview sourceCode={`<Hooks />`}>
                            <p>Hooks API details go here.</p>
                        </ComponentPreview>
                    </Section>

                    <Section id="utils" title="Utils" className="text-left">
                        <ComponentPreview sourceCode={`<Utils />`}>
                            <p>Utils API details go here.</p>
                        </ComponentPreview>
                    </Section>

                    <Section id="types" title="Types" className="text-left">
                        <ComponentPreview sourceCode={`<Types />`}>
                            <p>Types API details go here.</p>
                        </ComponentPreview>
                    </Section>
                </div>
            </DocsLayout>
        </div>
    );
};

export default DocsPage;