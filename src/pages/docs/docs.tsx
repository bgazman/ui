import React from 'react';
import DocsLayout from '@layout/docs-layout';
import { mockHeaderData } from '@pages/docs/data/header-data';
import { footerMockData } from '@pages/home/data/footer-data';
import { mockSidebarData } from '@pages/docs/data/sidebar-data';
import Section from '@components/section/section';
import ComponentPreview from '@components/preview/component-preview';
import Card from '@components/card/card';
import Box from '@components/box';

const DocsPage: React.FC = () => {
    const layoutConfig = {
        header: {
            height: '4rem',
            position: 'sticky' as const,
        },
        main: {
            maxWidth: '90%',
            padding: 'px-6',
            minHeight: 'calc(100vh - 8rem)', // Ensures content fills the screen
        },
        footer: {
            height: '4rem',
            position: 'relative' as const, // Changed to a valid value
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
            sidebarMenuItems={mockSidebarData.sideBarMenuItems} // Ensure type compatibility
        >
            <Box className="space-y-16 sm:space-y-20">
                <Section id="introduction" title="Introduction" className="text-left">
                    <p>Introduction content goes here.</p>
                </Section>
                <Section id="card-component" title="Card Component" className="text-left">
                    <ComponentPreview
                        title="Card Component"
                        description="This is a preview of the Card component."
                        sourceCode={`<Card title="Card Title"><div className="p-6">Card Content</div></Card>`}
                        className="custom-class"
                    >
                        <Card className="p-6" title="Card Title">
                            <div>Card Content</div>
                        </Card>
                    </ComponentPreview>
                </Section>
            </Box>
        </DocsLayout>
    );
};

export default DocsPage;