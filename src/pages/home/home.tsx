import React, { useState } from 'react';

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/sidebar/sidebar";
import {_navItems} from "./data/navigation-items.ts";
import {_contact, _note} from "./data/footer-data.ts";



const _header = {
    brandName: "YourBrand",
    navigationItems: _navItems,
    logo: {
        alt: "YourBrand Logo",
        src: "/images/logo.svg"
    }
};

const HomePage: React.FC = () => {
    const [currentLayout] = useState<'top' | 'sidebar-left' | 'sidebar-right'>('sidebar-left');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className={`home-page-layout ${currentLayout}`}>
            <Header
                navItems={_header.navigationItems}
                brandName={_header.brandName}
                logo={_header.logo}
                onSettingsClick={toggleDrawer}
            />

            {currentLayout === 'sidebar-left' && <Sidebar navItems={_header.navigationItems} />}
            <main className="main-content">
                <Footer contact={_contact} note={_note} />
            </main>
        </div>
    );
};

export default HomePage;