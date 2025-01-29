import React from 'react';
import DocsLayout from '@layout/docs-layout';
import { mockHeaderData } from '@pages/docs/data/header-data';
import { footerMockData } from '@pages/home/data/footer-data';
import { mockSidebarData } from '@pages/docs/data/sidebar-data';
import Section from '@components/section/section';
import ComponentPreview from '@components/preview/component-preview';
import Box from '@components/box';
import CardExample from '@pages/docs/examples/card-example';
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
                    </Section>
                ))}
            </Box>
        </DocsLayout>
    );
};

export default DocsPage;