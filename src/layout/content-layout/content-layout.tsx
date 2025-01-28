import React, { useEffect } from 'react';
import Main, { MainProps } from '@components/main.tsx';
import { useLayout } from '@layout/context/layout-context';

interface ContentLayoutProps {
    mainData?: Omit<MainProps, 'children'>;
    children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({
    mainData = {
        heroItems: [],
        pricingItems: [],
        featuresItems: [],
    },
    children
}) => {
    const { layout, setLayout } = useLayout();

    useEffect(() => {
        setLayout('content');
    }, [setLayout]);

    return (
        <div
            className="grid w-full min-h-screen grid-cols-1"
            style={{
                gridTemplateAreas: '"main"',
                gridTemplateRows: '1fr'
            }}
            data-layout={layout}
        >
            <Main
                className="[grid-area:main]"
                {...mainData}
            >
                {children}
            </Main>
        </div>
    );
};

export default ContentLayout;