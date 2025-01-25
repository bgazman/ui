import React, { useState } from 'react';
import './layout-demo.css';
import Header from "../../components/header/header.tsx";
import HeroSection from "../../components/hero/hero.tsx";
import FeaturesSection from "../../components/features/features.tsx";
import PricingSection from "../../components/pricing/pricing.tsx";
import Footer from "../../components/footer/footer.tsx";
import Sidebar from "../../components/sidebar/sidebar.tsx";
import {_navigationItems} from "./data/navigation-items.ts";
import {_heroItems} from "./data/hero-items.ts";
import {_contact, _note} from "./data/footer-data.ts";
import {_pricingItems} from "./data/pricing-items.ts";
import {_featuresItems} from "./data/features-items.ts";





const _header = {
    brandName: "YourBrandName",
    navigationItems: _navigationItems,
    logo: {
        alt: "YourBrandName",
        src: "/images/logo.svg",
    },
};

const LayoutDemo: React.FC = () => {
    const [currentLayout] = useState<'top' | 'sidebar-left' | 'sidebar-right'>('sidebar-left');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    console.log("[LayoutDemo] Current Layout State:", currentLayout); // Logs the current layout
    console.log("[LayoutDemo] Drawer Open State (isDrawerOpen):", isDrawerOpen); // Logs state of drawer

    const handleSettingsClick = () => {
        const newDrawerState = !isDrawerOpen;
        console.log("[Settings Click] Toggling Drawer State to:", newDrawerState); // Logs new state on toggle
        setIsDrawerOpen(newDrawerState);
    };

    return (
        <>

                    <Header
                        navItems={_header.navigationItems}
                        brandName={_header.brandName}
                        logo={_header.logo}
                        onSettingsClick={handleSettingsClick}
                    />

                    <Sidebar navItems={_header.navigationItems} />
                    <main className="main-content">

                        <HeroSection heroItems={_heroItems} />

                        {/* Features Section */}
                        <FeaturesSection featuresItems={_featuresItems} />

                        {/* Pricing Section */}
                        <PricingSection pricingItems={_pricingItems} />

                        {/* Footer */}
                        <Footer contact={_contact} note={_note} />
                    </main>



        </>
    );
};

export default LayoutDemo;