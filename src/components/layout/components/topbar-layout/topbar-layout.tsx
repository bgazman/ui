import React from 'react';
import Header, { HeaderProps } from "@components/header/header";
import Main from "@components/main/main";
import { useLayout } from '@components/layout/context/layout-context';

interface HeaderLayoutProps {
    header: HeaderProps;
    children: React.ReactNode;
}

const TopbarLayout: React.FC<HeaderLayoutProps> = ({ header, children }) => {
    const { layout } = useLayout();

    console.log('Layout value:', layout); // Debugging line

    return (
        <div className="layout-container topbar" data-layout="topbar">
            {/* Header */}
            <Header {...header} />

            {/* Main Content */}
            <Main>
                {children}
            </Main>
        </div>
    );
};

export default TopbarLayout;