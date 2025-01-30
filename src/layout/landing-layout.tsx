import React from 'react';
import BaseLayout, { BaseLayoutProps } from '@layout/base-layout.tsx';

type LandingLayoutProps = Omit<BaseLayoutProps, 'layoutType' | 'gridTemplate'>;

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
    const updatedHeaderData = {
        ...props.headerData,
        style: {
            ...props.headerData.style,
            backgroundcolor: 'var(--header-bg-color)',
        },
    };

    return <BaseLayout {...props} headerData={updatedHeaderData} layoutType="landing" />;
};

export default LandingLayout;