// landing-layout.tsx
import React from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import { NavItem } from '@components/navigation/navigation';

interface LandingLayoutProps {
    children: React.ReactNode;
    headerNavItems: NavItem[];
    footerNavItems: NavItem[];
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({
                                                                children,
                                                                headerNavItems,
                                                                footerNavItems
                                                            }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header
                position="fixed"
                headerNavItems={headerNavItems}
            />
            <main className="flex-1 mt-[var(--header-height)]">
                {children}
            </main>
            <Footer
                footerNavItems={footerNavItems}
                socialLinks={{
                    twitter: 'https://twitter.com',
                    linkedin: 'https://linkedin.com'
                }}
            />
        </div>
    );
};
export default LandingLayout;