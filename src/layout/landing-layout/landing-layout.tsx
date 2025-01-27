import React from 'react';
import Header, { HeaderProps } from '@components/header/header.tsx';
import Footer, { FooterProps } from '@components/footer/footer.tsx';
import Main, { MainProps } from '@components/main/main.tsx';

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