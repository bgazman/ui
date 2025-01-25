import React from 'react';
import './dynamic-layout.css';
import Main, { MainProps } from "@components/main/main";
import Sidebar, { SidebarProps } from "@components/sidebar/sidebar";
import Footer, { FooterProps } from "@components/footer/footer";
import Header, { HeaderProps } from '@components/header/header';
import { useLayout } from '../../context/layout-context';

interface DynamicLayoutProps {
    header?: HeaderProps;
    sidebar?: SidebarProps;
    main: MainProps;
    footer?: FooterProps;
}

const DynamicLayout: React.FC<DynamicLayoutProps> = ({ header, sidebar, main, footer }) => {
    const { dynamicLayout } = useLayout();
    const effectiveLayout = dynamicLayout || 'content';
    const layoutClass = `layout-container layout-${effectiveLayout}`;
    return (
        <div data-layout={effectiveLayout} className={layoutClass}>
            {header && <Header {...header} />}
            {sidebar && <Sidebar {...sidebar} />}
            <Main {...main} />
            {footer && <Footer {...footer} />}
        </div>
    );
};

export default DynamicLayout;