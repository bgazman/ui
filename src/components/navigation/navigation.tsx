import React, { useState } from 'react';

export interface NavigationProps {
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    navItems: NavItem[];
}

export type NavItem = {
    href: string;
    label: string;
    items?: NavItem[]; // Supports nested items for dropdowns
};

const Navigation: React.FC<NavigationProps> = ({ navItems, orientation = 'horizontal', className }) => {
    const containerClass = `${className || ''} ${orientation === 'vertical' ? 'flex flex-col space-y-2' : 'flex flex-row space-x-6'}`;

    return (
        <nav className={containerClass}>
            {navItems.map((item, index) => (
                <NavItem key={index} item={item} />
            ))}
        </nav>
    );
};

// 🔥 Dropdown Menu Component
const NavItem: React.FC<{ item: NavItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Main Link */}
            <a
                href={item.href}
                className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors px-4 py-2"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                aria-haspopup={item.items ? 'true' : undefined}
            >
                {item.label}
            </a>

            {/* Dropdown Menu */}
            {item.items && isOpen && (
                <div
                    className="absolute left-0 mt-2 w-48 bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-lg rounded-lg z-50"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {item.items.map((subItem, subIndex) => (
                        <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-[var(--text-primary)] hover:bg-[var(--bg-alt1)] hover:text-[var(--text-secondary)] rounded transition-colors"
                        >
                            {subItem.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navigation;
