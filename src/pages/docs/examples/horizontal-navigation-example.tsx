import React from 'react';
import HorizontalNavigation from '@components/navigation/horizontal-navigation';
import { NavItem } from '@components/navigation.tsx';
import Box from '@components/box';

const horizontalNavItems: NavItem[] = [
    { label: "Dashboard", href: "/" },
    {
        label: "Products",
        children: [
            {
                label: "Electronics",
                children: [
                    {
                        label: "Computers",
                        children: [
                            { label: "Laptops", href: "#laptops" },
                            { label: "Desktops", href: "#desktops" },
                            {
                                label: "Components",
                                children: [
                                    { label: "CPUs", href: "#cpus" },
                                    { label: "GPUs", href: "#gpus" },
                                    { label: "Memory", href: "#memory" }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Mobile Devices",
                        children: [
                            { label: "Smartphones", href: "#smartphones" },
                            { label: "Tablets", href: "#tablets" },
                            { label: "Accessories", href: "#accessories" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "Services",
        children: [
            {
                label: "Support",
                children: [
                    { label: "Hardware", href: "#hardware-support" },
                    { label: "Software", href: "#software-support" },
                    { label: "Network", href: "#network-support" }
                ]
            },
            {
                label: "Professional",
                children: [
                    { label: "Consulting", href: "#consulting" },
                    { label: "Training", href: "#training" },
                    { label: "Enterprise", href: "#enterprise" }
                ]
            }
        ]
    },
    { label: "Contact", href: "#contact" }
];



const HorizontalNavigationExample: React.FC = () => {
    return (
        <Box className="horizontal-navigation-example" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', flexGrow: 1 }}>
<HorizontalNavigation navItems={horizontalNavItems} variant="default" bgColor="var(--bg-primary)" />
<HorizontalNavigation navItems={horizontalNavItems} variant="onHover" bgColor="var(--bg-primary)" />
        </Box>
    );
};


export default HorizontalNavigationExample;