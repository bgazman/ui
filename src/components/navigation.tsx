import React from 'react';

export interface NavigationProps {
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    navItems: NavItem[];
}

export type NavItem = {
    href: string;
    label: string;
    link: string;
    items?: NavItem[]; // Add this line to include the items property
};

const Navigation: React.FC<NavigationProps> = ({ navItems, orientation = 'horizontal', className }) => {
    const containerClass = `${className || ''} ${orientation === 'vertical' ? 'flex flex-col' : 'flex flex-row'}`;

    return (
        <nav className={containerClass}>
            {navItems.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
};

export default Navigation;