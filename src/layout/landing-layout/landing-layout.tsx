import React, { useEffect, useState } from 'react';
import Header, { HeaderProps } from '@components/header/header';
import Footer, { FooterProps } from '@components/footer/footer';
import Main from '@components/main/main';

interface LandingLayoutProps {
    headerData: HeaderProps;
    footerData: FooterProps;
    children: React.ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({
                                                         headerData,
                                                         footerData,
                                                         children,
                                                     }) => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const viewportHeight = window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;

            setShowFooter(scrolled + viewportHeight >= totalHeight - 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="theme-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header
                {...headerData}
                className="header"
            />

            <Main
                className="landing-layout__main flex-grow"

            >
                {children}
            </Main>

            <Footer
                {...footerData}
                className="landing-layout__footer"
            />
        </div>
    );
};

export default LandingLayout;