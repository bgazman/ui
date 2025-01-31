import React from 'react';
import VerticalNavigation from '@components/navigation/vertical-navigation';
import { NavItem } from '@components/navigation/navigation';
import Box from '@components/box';

const verticalNavItems: NavItem[] = [
    { label: "Dashboard", href: "/" },
    {
        label: "Products",
        items: [
            {
                label: "Electronics",
                items: [
                    {
                        label: "Computers",
                        items: [
                            { label: "Laptops", href: "#laptops" },
                            { label: "Desktops", href: "#desktops" },
                            {
                                label: "Components",
                                items: [
                                    { label: "CPUs", href: "#cpus" },
                                    { label: "GPUs", href: "#gpus" },
                                    { label: "Memory", href: "#memory" }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Mobile Devices",
                        items: [
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
        items: [
            {
                label: "Support",
                items: [
                    { label: "Hardware", href: "#hardware-support" },
                    { label: "Software", href: "#software-support" },
                    { label: "Network", href: "#network-support" }
                ]
            },
            {
                label: "Professional",
                items: [
                    { label: "Consulting", href: "#consulting" },
                    { label: "Training", href: "#training" },
                    { label: "Enterprise", href: "#enterprise" }
                ]
            }
        ]
    },
    { label: "Contact", href: "#contact" }
];

const VerticalNavigationExample: React.FC = () => {
    return (
        <Box className="vertical-navigation-example" style={{ display: 'flex', flexDirection: 'row', gap: 'var(--spacing-lg)' }}>
            <VerticalNavigation navItems={verticalNavItems} variant="default" />
            <VerticalNavigation navItems={verticalNavItems} variant="compact" />
            <VerticalNavigation navItems={verticalNavItems} variant="expanded" />
        </Box>
    );
};

export default VerticalNavigationExample;