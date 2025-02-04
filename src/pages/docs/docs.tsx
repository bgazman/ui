import React from 'react';
import DocsLayout from '@layout/docs-layout/docs-layout';
import {docsFooterItems, docsHeaderItems, docsSidebarItems,} from './data/nav-items';

import { docsSectionList } from './data/docs-section-data';

import Box from '@components/box';
import AnimatedSection from '@components/animated-section.tsx';
import ComponentPreview from '@components/component-preview.tsx';
import CardExample from '@pages/docs/examples/card-example';
import SectionExample from '@pages/docs/examples/section-example';
import GridExample from '@pages/docs/examples/grid-example';
import ButtonExample from '@pages/docs/examples/button-example';
import TextAreaExample from '@pages/docs/examples/text-area-example';
import BoxExample from '@pages/docs/examples/box-example';
import FormExample from '@pages/docs/examples/form-example';
import InputFieldExample from '@pages/docs/examples/input-field-example';
import TabMenuExample from '@pages/docs/examples/tab-menu-example';
import HorizontalNavigationExample from '@pages/docs/examples/horizontal-navigation-example';
import VerticalNavigationExample from '@pages/docs/examples/vertical-navigation-example';

const DocsPage: React.FC = () => {
    return (
<DocsLayout
    headerData={docsHeaderItems}
    footerData={docsFooterItems}
    sidebarData={docsSidebarItems}
>
            <Box className="space-y-16 sm:space-y-20">
                {docsSectionList.map((section) => (
                    <AnimatedSection
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        description={section.description}
                        variant="left"
                        className="animated-section-border"
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
        </DocsLayout>
    );
};

export default DocsPage;