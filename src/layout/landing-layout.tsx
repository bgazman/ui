import React from 'react';
import BaseLayout, { BaseLayoutProps } from '@layout/base-layout.tsx';

type LandingLayoutProps = Omit<BaseLayoutProps, 'layoutType' | 'gridTemplate'>;

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
    return <BaseLayout {...props} layoutType="landing" />;
};

export default LandingLayout;