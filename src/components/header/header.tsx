import React from 'react';
import Navigation from "../navigation/navigation";

type MenuItemType = {
    label: string;
    href: string;
};

type LogoType = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

export interface HeaderProps {
    className?: string;
    style?: React.CSSProperties;
    logo?: string | LogoType;
    menuItems: MenuItemType[];
    brandName?: string;
    position?: 'fixed' | 'sticky' | 'relative';
}

const Header: React.FC<HeaderProps> = ({
                                           logo,
                                           menuItems,
                                           brandName,
                                           className,
                                           style,
                                           position = 'sticky'
                                       }) => {
    const getPositionClass = () => ({
        fixed: 'fixed top-0 left-0 right-0',
        sticky: 'sticky top-0',
        relative: 'relative'
    }[position]);

    const renderLogo = () => {
        if (!logo) return null;
        if (typeof logo === 'string') {
            return <span className="text-xl font-bold">{logo}</span>;
        }
        return (
            <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain"
            />
        );
    };

    return (
        <header
            className={`
                w-full bg-white shadow-sm z-50
                ${getPositionClass()}
                ${className || ''}
            `}
            style={style}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        {renderLogo()}
                        {brandName && (
                            <span className="text-xl font-semibold text-gray-900">
                                {brandName}
                            </span>
                        )}
                    </div>
                    <Navigation
                        className="flex items-center space-x-4"
                        navItems={menuItems.map(item => ({
                            label: item.label,
                            link: item.href
                        }))}
                        orientation="horizontal"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;