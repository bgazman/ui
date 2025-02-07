import React from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import Main from '@components/main';
import Navigation from '@components/navigation';
import ThemeSwitcher from '@components/theme-switcher';
import Button from "@components/button.tsx";
import clsx from 'clsx';
import { MenuItem } from "@components/navigation";

interface LandingLayoutProps {
    headerNavItems: MenuItem[];
    footerNavItems: MenuItem[];
    className?: string;
    children: React.ReactNode;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({
    children,
    headerNavItems,
    footerNavItems,
    className = "",
}) => {
    return (
        <div className={clsx("min-h-screen flex flex-col", className)}>
            <Header variant="fixed" className="w-full bg-primary text-primary-foreground shadow-md">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img src='/src/assets/icons/logo.png' alt="Logo" className="h-8 w-8" />
                        <h1>GlidemanUI</h1>
                    </div>
                    <Navigation
                        type="navbar"
                        items={headerNavItems}
                        className="flex-1 flex justify-center bg-primary text-primary-foreground"
                    />
                    <div className="flex items-center space-x-4">
                        <ThemeSwitcher />
                        <Button variant="secondary">Sign In</Button>
                        <Button variant="primary">Sign Up</Button>
                    </div>
                </div>
            </Header>
            <Main className="flex-1 mt-header">
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