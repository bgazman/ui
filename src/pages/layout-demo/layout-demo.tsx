import React, { useState } from 'react';
import DynamicLayout from '../../components/layout/components/dynamic-layout/dynamic-layout.tsx';
import HeroSection from "../../components/hero/hero.tsx";
import PricingSection from "../../components/pricing/pricing.tsx";
import Toolbar from "../../components/tools/toolbar.tsx";
import Footer from "../../components/footer/footer.tsx";
import FeaturesSection from "../../components/features/features.tsx";
import { mockHeaderData } from './data/header-data.ts';
import { sidebarMockData } from './data/sidebar-data.ts';
import { _heroItems, _featuresItems, _pricingItems } from './data/main-data.ts';
import { _contact, _note } from './data/footer-data.ts';
import HeaderLayout from '../../components/layout/components/header-layout/header-layout.tsx';

const LayoutDemo: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleSettingsClick = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <HeaderLayout header={{
            menuItems: mockHeaderData.menuItems,
            brandName: mockHeaderData.brandName,
            logo: mockHeaderData.logo,
            onSettingsClick: handleSettingsClick
        }}>
            <DynamicLayout
                sidebar={{ sideBarMenuItems: sidebarMockData.sidebarMenuItems }}
                main={{
                    children: (
                        <>
                            <HeroSection heroItems={_heroItems} />
                            <FeaturesSection featuresItems={_featuresItems} />
                            <PricingSection pricingItems={_pricingItems} />
                            <Footer contact={_contact.email} note={_note.noteText} />
                        </>
                    )
                }}
            />
            <Toolbar />
        </HeaderLayout>
    );
};

export default LayoutDemo;