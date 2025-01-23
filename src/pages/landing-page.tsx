import React from 'react';
import Footer from "../components/footer/footer.tsx";
import FeaturesSection from "../components/features/features.tsx";
import PricingSection from "../components/pricing/pricing.tsx";
import HeroSection from "../components/hero/hero.tsx";
import Header from "../components/header/header.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";

const heroItems = [
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
// features-data.ts
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
        link: "/basic-plan"
    },
    {
        title: "Pro Plan",
        price: "$19.99/month",
        features: ["Feature X", "Feature Y", "Feature Z"],
        link: "/pro-plan"
    }
];



const _navigationItems = [
    {label: "Home", link: "/"},
    {label: "Features", link: "#features"},
    {label: "Pricing", link: "#pricing"},
    {label: "About Us", link: "#about"},
    {label: "Contact", link: "#contact"},
];

const _contact = {
    email: "contact@example.com",
    address: "123 Main St, Anytown, USA"
};

const _note = {
    noteText: "© 2023 YourBrandName. All rights reserved."
};

const _header = {
    brandName: "YourBrandName",
    navigationItems: _navigationItems,
    logo: {
        alt: "YourBrandName",
        src: "/images/logo.svg"  // Adjust path as needed
    },
    // You can add more header-specific configurations here if needed
};
const LandingPage: React.FC = () => {
    return (
        <div className="layout-container">
            <Header navItems={_header.navigationItems} logo={_header.logo} brandName={_header.brandName}/>
            <Sidebar navItems={_navigationItems}/>
            <main className="main-content">
                <HeroSection heroItems={heroItems}/>
                <FeaturesSection featuresItems={_featuresItems}/>
                <PricingSection pricingItems={_pricingItems}/>
                <Footer contact={_contact} note={_note}/>
            </main>
        </div>
    );
};

export default LandingPage;