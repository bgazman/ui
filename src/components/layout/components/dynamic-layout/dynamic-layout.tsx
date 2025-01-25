import React from 'react';
import './dynamic-layout.css';
import Main, { MainProps } from "../../../main/main.tsx";
import Sidebar, { SidebarProps } from "../../../sidebar/sidebar.tsx";
import Footer, { FooterProps } from "../../../footer/footer.tsx";
import Header, { HeaderProps } from '../../../header/header.tsx';
import { useLayout } from '../../context/layout-context.tsx';

interface DynamicLayoutProps {
    header?: HeaderProps;
    sidebar?: SidebarProps;
    main: MainProps;
    footer?: FooterProps;
}

const DynamicLayout: React.FC<DynamicLayoutProps> = ({ header, sidebar, main, footer }) => {
    const { dynamicLayout } = useLayout();

    return (
        <div data-layout={dynamicLayout}>
            {header && <Header {...header} />}
            {sidebar && <Sidebar {...sidebar} />}
            <Main {...main} />
            {footer && <Footer {...footer} />}
        </div>
    );
};

export default DynamicLayout;