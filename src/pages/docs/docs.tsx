import React from 'react';
import DocsLayout from '@layout/docs-layout/docs-layout';
import { docsFooterItems, docsHeaderItems, docsSidebarItems } from './data/nav-items';
import { docsSectionList } from './data/docs-section-data';
import Box from '@components/box';
import Section from '@components/section.tsx';
import ComponentPreview from '@components/component-preview.tsx';
import CardExample from '@pages/docs/examples/card-example';
import SectionExample from '@pages/docs/examples/section-example';
import GridExample from '@pages/docs/examples/grid-example';
import ButtonExample from '@pages/docs/examples/button-example';
import TextAreaExample from '@pages/docs/examples/text-area-example';
import BoxExample from '@pages/docs/examples/box-example';
import FormExample from '@pages/docs/examples/form-example';
import TabMenuExample from '@pages/docs/examples/tab-menu-example';
import BadgeExample from '@pages/docs/examples/badge-example';

const DocsPage: React.FC = () => {
    const tocItems = docsSectionList.map(section => ({
        label: section.title,
        href: `#${section.id}`
    }));

    return (
        <DocsLayout
            headerData={docsHeaderItems}
            footerData={docsFooterItems}
            sidebarData={docsSidebarItems}
            tocItems={tocItems}
        >
            <Box className="space-y-16 sm:space-y-20">
                {docsSectionList.map((section) => (
                    <Section
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        className="left"
                    >
                        {section.id === 'button-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <ButtonExample />
                            </ComponentPreview>
                        )}
                        {section.id === 'badge-component' && (
                            <ComponentPreview sourceCode={section.sourceCode} className="custom-class">
                                <BadgeExample />
                            </ComponentPreview>
                        )}
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

                    </Section>
                ))}
            </Box>
        </DocsLayout>
    );
};

export default DocsPage;