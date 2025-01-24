import React, { useState } from 'react';
import './layout-demo.css';
import Header from "../../components/header/header.tsx";
import HeroSection from "../../components/hero/hero.tsx";
import FeaturesSection from "../../components/features/features.tsx";
import PricingSection from "../../components/pricing/pricing.tsx";
import Footer from "../../components/footer/footer.tsx";
import Sidebar from "../../components/sidebar/sidebar.tsx";

const _heroItems = [
    {
        title: "Welcome to Our Platform",
        description: "Discover amazing features and benefits tailored just for you.",
        actionText: "Get Started",
        actionLink: "/get-started",
    },
    {
        title: "Grow Your Skills",
        description: "Learn and develop expertise with our curated resources.",
        actionText: "Learn More",
        actionLink: "/learn",
    },
    {
        title: "Join Our Community",
        description: "Be part of a growing network of like-minded individuals.",
        actionText: "Sign Up",
        actionLink: "/sign-up",
    },
];

const _featuresItems = [
    {
        title: "Custom Feature 1",
        description: "Details about custom feature 1.",
        benefits: ["Custom Benefit 1A", "Custom Benefit 1B"],
    },
    {
        title: "Custom Feature 2",
        description: "Details about custom feature 2.",
        benefits: ["Custom Benefit 2A", "Custom Benefit 2B", "Custom Benefit 2C"],
    },
];

const _pricingItems = [
    {
        title: "Basic Plan",
        price: "$9.99/month",
        features: ["Feature A", "Feature B", "Feature C"],
        link: "/basic-plan",
    },
    {
        title: "Pro Plan",
        price: "$19.99/month",
        features: ["Feature X", "Feature Y", "Feature Z"],
        link: "/pro-plan",
    },
];

const _navigationItems = [
    { label: "Home", link: "/" },
    { label: "Features", link: "#features" },
    { label: "Pricing", link: "#pricing" },
    { label: "About Us", link: "#about" },
    { label: "Contact", link: "#contact" },
];

const _contact = {
    email: "contact@example.com",
    address: "123 Main St, Anytown, USA",
};

const _note = {
    noteText: "© 2023 YourBrandName. All rights reserved.",
};

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