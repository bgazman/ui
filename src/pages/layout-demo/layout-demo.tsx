import React, { useState } from 'react';
import DynamicLayout from '@components/layout/components/dynamic-layout/dynamic-layout';
import HeroSection from "@components/hero/hero";
import PricingSection from "@components/pricing/pricing";
import Toolbar from "@components/tools/toolbar";
import FeaturesSection from "@components/features/features";
import { mockHeaderData } from './data/header-data';
import { sidebarMockData } from './data/sidebar-data';
import { _heroItems, _featuresItems, _pricingItems } from './data/main-data';
import { _contact, _note } from './data/footer-data';
import TopbarLayout from '@layout/components/topbar-layout/topbar-layout';

const LayoutDemo: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleSettingsClick = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>

            <DynamicLayout
                header={{
                    menuItems: mockHeaderData.menuItems,
                    brandName: mockHeaderData.brandName,
                }}
                sidebar={{ sideBarMenuItems: sidebarMockData.sidebarMenuItems }}
                main={{
                    children: (
                        <>
                            <HeroSection heroItems={_heroItems} />
                            <FeaturesSection featuresItems={_featuresItems} />
                            <PricingSection pricingItems={_pricingItems} />
                        </>
                    )
                }}
                footer={{
                    contact: _contact.email,
                    note: _note.noteText
                }}
            />
            <Toolbar/>
        </>
    );
};

export default LayoutDemo;