import React, { useEffect } from 'react';
import BaseLayout from '@layout/base-layout/base-layout';
import { mockHeaderData } from '@pages/docs/data/header-data';
import { mockFooterData } from '@pages/docs/data/footer-data';
import { mockSidebarData } from '@pages/docs/data/sidebar-data';
import { docsSectionList } from '@pages/docs/data/docs-section-data';
import Box from '@components/box';
import AnimatedSection from '@components/animated-section/animated-section';
import ComponentPreview from '@components/preview/component-preview';
import CardExample from '@pages/docs/examples/card-example';
import SectionExample from '@pages/docs/examples/section-example';
import GridExample from '@pages/docs/examples/grid-example';
import ButtonExample from '@pages/docs/examples/button-example';
import TextAreaExample from '@pages/docs/examples/text-area-example';
import BoxExample from '@pages/docs/examples/box-example';
import FormExample from '@pages/docs/examples/form-example';
import InputFieldExample from '@pages/docs/examples/input-field-example';
import TabMenuExample from '@pages/docs/examples/tab-menu-example';
import { NavItem } from '@components/navigation/navigation';
import HorizontalNavigationExample from '@pages/docs/examples/horizontal-navigation-example';
import VerticalNavigationExample from '@pages/docs/examples/vertical-navigation-example';

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

    useEffect(() => {
    }, []);

const gridTemplate = {
    areas: '"header header" "sidebar main" "footer footer"',
    rows: `${layoutConfig.header.height} 1fr ${layoutConfig.footer.height}`,
    columns: `${layoutConfig.sidebar?.width || '16rem'} 1fr`,
};

    // Ensure that each nav item has a children array (even if empty)
    const ensureChildrenArray = (items: NavItem[]): { label: string; children: NavItem[] }[] => {
        return items.map((item) => ({
            ...item,
            children: item.children || [],
        }));
    };

    return (
        <BaseLayout
            headerData={mockHeaderData}
            footerData={mockFooterData}
            layoutType="docs"
            gridTemplate={gridTemplate}
            sidebarMenuItems={ensureChildrenArray(mockSidebarData)}
            layoutConfig={layoutConfig}>
            {/* Remove centering and force left alignment */}
            <Box className="space-y-16 sm:space-y-20">
                {docsSectionList.map((section) => (
                    <AnimatedSection
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        description={section.description}
                        variant="left"
                        className="animated-section-border" // Apply the CSS class
                    >
                        {section.id === 'card-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <CardExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'section-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <SectionExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'grid-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <GridExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'button-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <ButtonExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'tab-menu-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <TabMenuExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'text-area-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <TextAreaExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'box-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <BoxExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'form-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <FormExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'form-field-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <InputFieldExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'horizontal-navigation-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <HorizontalNavigationExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'vertical-navigation-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <VerticalNavigationExample />
                            </ComponentPreview>
                        )}
                    </AnimatedSection>
                ))}
            </Box>
        </BaseLayout>
    );
};

export default DocsPage;