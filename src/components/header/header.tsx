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
                                           position = 'sticky',
                                       }) => {
    const getPositionClass = () => ({
        fixed: 'fixed top-0 left-0 right-0',
        sticky: 'sticky top-0',
        relative: 'relative',
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
            className={`w-full bg-white shadow-sm z-50 ${getPositionClass()} ${className || ''}`}
            style={style}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Logo and Brand */}
                    <div className="flex items-center gap-2">
                        {renderLogo()}
                        {brandName && (
                            <span className="text-xl font-semibold text-gray-900">
                                {brandName}
                            </span>
                        )}
                    </div>

                    {/* Center: Navigation */}
                    <nav className="flex-1">
                        <Navigation
                            className="flex justify-center items-center space-x-6"
                            navItems={menuItems.map((item) => ({
                                label: item.label,
                                link: item.href,
                            }))}
                            orientation="horizontal"
                        />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
