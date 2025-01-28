import React, { useEffect } from 'react';
import Header from '@components/header/header';
import type { HeaderProps } from '@components/header/header';
import Footer, { FooterProps } from '@components/footer/footer';
import Main from '@components/main/main';
import { useLayout } from '@layout/context/layout-context';
import Grid from '@components/grid'; // Import your Grid component

export type HeroItem = {
    title: string;
    description: string;
    actionText: string;
    actionLink: string;
};

export type PricingItem = {
    title: string;
    price: string;
    features: string[];
    link: string;
};

export type FeatureItem = {
    title: string;
    description: string;
    benefits: string[];
};

interface LayoutConfig {
    header: {
        height: string;
        position: 'sticky' | 'relative';
    };
    main: {
        maxWidth: string;
        padding: string;
        isCentered?: boolean;
    };
    footer: {
        height: string;
        position: 'sticky' | 'relative';
    };
}

interface LandingLayoutProps {
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
    headerData: {
        logo = '/logo.png',
        menuItems = defaultHeaderItems,
        brandName = 'Your Brand',
        ...headerRest
    },
    footerData: {
        menuItems: footerMenuItems = [], // Add default value here
        ...footerRest
    },
    children,
    layoutConfig,
}) => {
    const { layout, setLayout } = useLayout();

    useEffect(() => {
        setLayout('landing'); // Dynamically set the layout value
    }, [setLayout]);

    return (
        <Grid
            className="w-full min-h-screen"
            style={{
                gridTemplateAreas: '"header" "main" "footer"',
                gridTemplateRows: `${layoutConfig.header.height} 1fr ${layoutConfig.footer.height}`,
            }}
            columns={1} // Single column layout
            data-layout={layout} // Add semantic context
        >
            <Header
                className="[grid-area:header]"
                logo={logo}
                menuItems={menuItems}
                brandName={brandName}
                {...headerRest}
            />
            <Main
                className={`[grid-area:main] w-full ${
                    layoutConfig.main.isCentered ? 'flex items-center justify-center' : ''
                }`}
            >
                {children}
            </Main>

            <Footer
                className="[grid-area:footer]"
                menuItems={footerMenuItems} // Use the default value here
                {...footerRest}
            />
        </Grid>
    );
};

export default LandingLayout;
