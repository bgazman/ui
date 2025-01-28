import React, { useEffect } from 'react';
import Header from '@components/header/header';
import type { HeaderProps } from '@components/header/header';
import Footer, { FooterProps } from '@components/footer/footer';
import Main, { MainProps } from '@components/main/main';
import { useLayout } from '@layout/context/layout-context';

interface LayoutConfig {
    header: {
        height: string;
        position: 'sticky' | 'relative';
    };
    main: {
        maxWidth: string;
        padding: string;
        isCentered?: boolean; // New property
    };
    footer: {
        height: string;
        position: 'sticky' | 'relative';
    };
}


interface LandingLayoutProps {
    mainData: Omit<MainProps, 'children'>;
    headerData: HeaderProps;
    footerData: FooterProps;
    children: React.ReactNode;
    layoutConfig: LayoutConfig;
}

const defaultHeaderItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'About', href: '/about' },
];

const LandingLayout: React.FC<LandingLayoutProps> = ({
                                                         mainData,
                                                         headerData: {
                                                             logo = '/logo.png',
                                                             menuItems = defaultHeaderItems,
                                                             brandName = 'Your Brand',
                                                             ...headerRest
                                                         },
                                                         footerData,
                                                         children,
                                                         layoutConfig,
                                                     }) => {
    const { layout, setLayout } = useLayout();

    useEffect(() => {
        setLayout('landing');
    }, [setLayout]);

    return (
        <div
            className="grid w-full min-h-screen grid-cols-1"
            style={{
                gridTemplateAreas: '"header" "main" "footer"',
                gridTemplateRows: `${layoutConfig.header.height} 1fr ${layoutConfig.footer.height}`,
            }}
            data-layout={layout}
        >
            <Header
                className="[grid-area:header]"
                logo={logo}
                menuItems={menuItems}
                brandName={brandName}
                {...headerRest}
            />
            <Main
                className={`[grid-area:main] ${
                    layoutConfig.main.isCentered
                        ? 'flex items-center justify-center'
                        : ''
                }`}
                {...mainData}
            >
                {children}
            </Main>
            <Footer
                className="[grid-area:footer]"
                links={footerData.links}
                copyright={footerData.copyright}
                contactInfo={footerData.contactInfo}
            />
        </div>
    );
};

export default LandingLayout;