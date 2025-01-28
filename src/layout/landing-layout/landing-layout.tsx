import React, { useEffect } from 'react';
import Header from '@components/header';
import type { HeaderProps } from '@components/header';
import Footer, { FooterProps } from '@components/footer';
import Main from '@components/main';
import { useLayout } from '@layout/context/layout-context';
import Grid from '@components/grid';

interface LayoutConfig {
    header: {
        height: string;
        position: 'sticky' | 'relative';
    };
    main: {
        maxWidth?: string;
        padding?: string;
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

const LandingLayout: React.FC<LandingLayoutProps> = ({
    headerData,
    footerData,
    children,
    layoutConfig,
}) => {
    const { layout, setLayout } = useLayout();

    useEffect(() => {
        setLayout('landing');
    }, [setLayout]);

    return (
        <Grid
            className="w-full min-h-screen"
            style={{
                gridTemplateAreas: '"header" "main" "footer"',
                gridTemplateRows: `${layoutConfig.header.height} 1fr ${layoutConfig.footer.height}`,
            }}
            columns={1}
            data-layout={layout}
        >
            <Header className="[grid-area:header]" {...headerData} />
            <Main className="[grid-area:main] w-full">
                <div
                    className={`w-full ${layoutConfig.main.padding || 'px-0'} mx-auto`}
                    style={{ maxWidth: layoutConfig.main.maxWidth }}
                >
                    {children}
                </div>
            </Main>
            <Footer className="[grid-area:footer]" {...footerData} />
        </Grid>
    );
};

export default LandingLayout;