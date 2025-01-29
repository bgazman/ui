import React from 'react';
import DocsLayout from '@layout/docs-layout';
import { mockHeaderData } from '@pages/docs/data/header-data';
import { footerMockData } from '@pages/home/data/footer-data';
import { mockSidebarData } from '@pages/docs/data/sidebar-data';
import Section from '@components/section/section';
import ComponentPreview from '@components/preview/component-preview';
import Box from '@components/box';
import CardExample from '@pages/docs/examples/card-example';
import SectionExample from '@pages/docs/examples/section-example';
import GridExample from '@pages/docs/examples/grid-example';
import ButtonExample from '@pages/docs/examples/button-example';
import TextAreaExample from '@pages/docs/examples/text-area-example';


import { docsSectionList } from '@pages/docs/data/docs-section-data';

const DocsPage: React.FC = () => {
    const layoutConfig = {
        header: {
            height: '4rem',
            position: 'sticky' as const,
        },
        main: {
            maxWidth: '90%',
            padding: 'px-6',
            minHeight: 'calc(100vh - 8rem)',
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
        <DocsLayout
            headerData={mockHeaderData}
            footerData={footerMockData}
            layoutConfig={layoutConfig}
            sidebarMenuItems={mockSidebarData.sideBarMenuItems}
        >
            <Box className="space-y-16 sm:space-y-20">
                {docsSectionList.map((section) => (
                    <Section key={section.id} id={section.id} title={section.title} className="text-left">
                        <p>{section.description}</p>
                        {section.id === 'card-component' && (
                            <ComponentPreview
                                title="Card Component"
                                description="This is a preview of the Card component."
                                sourceCode={section.sourceCode}
                                className="custom-class"
                            >
                                <CardExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'section-component' && (
                            <ComponentPreview
                                title="Section Component"
                                description="This is a preview of the Section component."
                                sourceCode={section.sourceCode}
                                className="custom-class"
                            >
                                <SectionExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'grid-component' && (
                            <ComponentPreview
                                title="Grid Component"
                                description="This is a preview of the Grid component."
                                sourceCode={section.sourceCode}
                                className="custom-class"
                            >
                                <GridExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'button-component' && (
                            <ComponentPreview
                                title="Button Component"
                                description="This is a preview of the Button component."
                                sourceCode={section.sourceCode}
                                className="custom-class"
                            >
                                <ButtonExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'text-area-component' && (
                            <ComponentPreview
                                title="Text Area Component"
                                description="This is a preview of the Text Area component."
                                sourceCode={section.sourceCode}
                                className="custom-class"
                            >
                                <TextAreaExample />
                            </ComponentPreview>
                        )}
                    </Section>

                ))}
            </Box>        </DocsLayout>
    );
};

export default DocsPage;