import React from 'react';
import Header, { HeaderProps } from '@components/header/header';
import Footer, { FooterProps } from '@components/footer/footer';
import Main, { MainProps } from '@components/main/main';

interface LandingLayoutProps {
    main: MainProps;
    header: HeaderProps;
    footer: FooterProps;
    bgColor?: string;
    textColor?: string;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ main, header, footer, bgColor = "var(--layout-bg)", textColor = "var(--layout-text-color)" }) => {
    return (
        <div className="layout-container landing" style={{ backgroundColor: bgColor, color: textColor }}>
            {/* Shared Header */}
            <Header {...header} />

            {/* Main Content */}
            <Main {...main} />

            {/* Shared Footer */}
            <Footer {...footer} />
        </div>
    );
};

export default LandingLayout;