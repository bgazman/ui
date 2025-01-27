import React, { useEffect } from 'react';
    import Header, { HeaderProps } from '@components/header/header.tsx';
    import Footer, { FooterProps } from '@components/footer/footer.tsx';
    import Main, { MainProps } from '@components/main/main.tsx';
    import { useLayout } from '@layout/context/layout-context';

    interface LandingLayoutProps {
        main: MainProps;
        header: HeaderProps;
        footer: FooterProps;
    }

    const LandingLayout: React.FC<LandingLayoutProps> = ({ main, header, footer }) => {
        const { layout, setLayout } = useLayout();

        useEffect(() => {
            setLayout('landing');
        }, [setLayout]);

        return (
            <div className="layout-container landing" data-layout={layout}>
                <Header {...header} />
                <Main {...main} />
                <Footer {...footer} />
            </div>
        );
    };

    export default LandingLayout;