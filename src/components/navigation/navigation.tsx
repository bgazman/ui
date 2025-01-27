import React from 'react';

export interface NavigationProps {
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    navItems: NavItem[];
}

export type NavItem = {
    label: string;
    link: string;
};

const Navigation: React.FC<NavigationProps> = ({ navItems, orientation = 'horizontal', className }) => {
    const containerClass = `${className} ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`;

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