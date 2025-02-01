import React from 'react';
import BaseLayout, { BaseLayoutProps } from '@layout/base-layout/base-layout.tsx';

type LandingLayoutProps = Omit<BaseLayoutProps, 'layoutType' | 'gridTemplate'>;

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
    const updatedHeaderData = {
        ...props.headerData,
    };

    return <BaseLayout {...props} headerData={updatedHeaderData} layoutType="landing" />;
};

export default LandingLayout;