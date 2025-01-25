import React from 'react';
import Main from "../../../../components/main/main";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="layout-container main">
            <Main>
                {children}
            </Main>
        </div>
    );
};

export default MainLayout;