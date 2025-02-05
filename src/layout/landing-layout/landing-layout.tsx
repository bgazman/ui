// landing-layout.tsx
import React from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import { NavItem } from '@components/navigation/navigation';
import Main from '@components/main';

interface LandingLayoutProps {
    headerNavItems: NavItem[];
    footerNavItems: NavItem[];
    className?: string; // Add this line
    children: React.ReactNode;
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
            <Main className="flex-1 mt-[var(--header-height)]">
                {children}
            </Main>
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