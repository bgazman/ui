// src/layout/landing-layout/landing-layout.tsx
import React, { useEffect } from 'react';
import Header, { HeaderProps } from '@components/header/header';
import Footer, { FooterProps } from '@components/footer/footer';
import Main, { MainProps } from '@components/main/main';
import { useLayout } from '@layout/context/layout-context';

interface LandingLayoutProps {
    mainData: Omit<MainProps, 'children'>; // Exclude children from mainData
    headerData: HeaderProps;
    footerData: FooterProps;
    children: React.ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ mainData, headerData, footerData, children }) => {
    const { layout, setLayout } = useLayout();

    useEffect(() => {
        setLayout('landing');
    }, [setLayout]);

    return (
        <div className="layout-container landing" data-layout={layout}>
            <Header {...headerData} />
            <Main {...mainData}>
                {children}
            </Main>
            <Footer {...footerData} />
        </div>
    );
};

export default LandingLayout;