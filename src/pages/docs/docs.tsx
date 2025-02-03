import React from 'react';
import DocsLayout from '@layout/docs-layout/docs-layout';
import { mockHeaderData } from './data/header-data';
import { mockFooterData } from './data/footer-data';
import { mockSidebarData } from './data/sidebar-data';

const docsSectionList = [
    { id: 'intro', title: 'Introduction', description: 'Welcome to the docs...' },
    { id: 'getting-started', title: 'Getting Started', description: 'How to begin...' },
    // ...
];

const DocsPage: React.FC = () => {
    return (
        <DocsLayout
            headerData={mockHeaderData}
            footerData={mockFooterData}
            sidebarData={mockSidebarData}
        >
            <div className="space-y-16 sm:space-y-20">
                {docsSectionList.map((section) => (
                    <section key={section.id} id={section.id}>
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                        <p>{section.description}</p>
                    </section>
                ))}
            </div>
        </DocsLayout>
    );
};

export default DocsPage;
