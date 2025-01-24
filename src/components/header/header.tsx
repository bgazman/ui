import React from 'react';
import Navigation, { NavItem } from "../navigation/navigation.tsx";

type Logo = {
    src: string;
    alt: string;
};

interface HeaderProps {
    brandName: string;
    logo: Logo;
    navItems: NavItem[];
    onSettingsClick?: () => void; // Add this optional prop
}

const Header: React.FC<HeaderProps> = ({ logo, navItems, brandName, onSettingsClick }) => {
    return (
        <header className="header ">
            <div className="header-container">
                {/* Logo */}
                <div className="header-logo">
                    <a href={logo.src} className="header-brand">
                        {brandName}
                    </a>
                </div>

                <nav className="header-nav">
                    <Navigation navItems={navItems} />
                </nav>

                {/* Add a button or trigger for onSettingsClick if necessary */}
                {onSettingsClick && (
                    <button
                        className="settings-button"
                        onClick={onSettingsClick}>
                        Settings
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;