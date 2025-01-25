import React from 'react';
import Header, { HeaderProps } from "../../../../components/header/header";
import Main from "../../../../components/main/main";
import { useLayout } from '../../context/layout-context.tsx';

interface HeaderLayoutProps {
    header: HeaderProps;
    children: React.ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ header, children }) => {
    const { layout } = useLayout();

    console.log('Layout value:', layout); // Debugging line

    return (
        <div className="header-layout" data-layout={layout}>
            {/* Header */}
            <Header {...header} />

            {/* Main Content */}
            <Main>
                {children}
            </Main>
        </div>
    );
};

export default HeaderLayout;