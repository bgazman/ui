import React from 'react';
import Navigation from '@components/navigation/navigation.tsx';

const navItems = [
    {
        href: '#home',
        label: 'Home',
    },
    {
        href: '#about',
        label: 'About',
        items: [
            { href: '#team', label: 'Team' },
            { href: '#company', label: 'Company' },
        ],
    },
    {
        href: '#services',
        label: 'Services',
    },
    {
        href: '#contact',
        label: 'Contact',
    },
];

const NavigationExample: React.FC = () => (
    <Navigation navItems={navItems} orientation="horizontal" className="my-custom-class" />
);

export default NavigationExample;