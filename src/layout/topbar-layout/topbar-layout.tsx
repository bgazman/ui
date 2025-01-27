import React from 'react';
import Header, { HeaderProps } from "@components/header/header.tsx";
import Main from "@components/main/main.tsx";
import { useLayout } from '@layout/context/layout-context';

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