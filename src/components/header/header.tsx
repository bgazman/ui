import React, { useState } from 'react';
import Navigation from "../navigation/navigation.tsx";

type MenuItem = {
    label: string;
    href: string;
};
type Logo = {
    src: string;
    alt: string;
};

export type HeaderProps = {
    logo?: string | Logo;
    menuItems: MenuItem[];
    brandName?: string;
    logoColor?: string;
    bgColor?: string;
    textColor?: string;
    showUserIcon?: boolean;
    onUserClick?: () => void;
    onSettingsClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({
    logo = "Logo",
    menuItems,
    brandName = "",
    logoColor = "var(--primary-color)",
    bgColor = "var(--header-bg)",
    textColor = "var(--header-text-color)",
    showUserIcon = true,
    onUserClick = () => {},
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const renderLogo = () => {
        if (typeof logo === 'string') {
            return logo;
        } else {
            return <img src={logo.src} alt={logo.alt} />;
        }
    };

    return (
        <header className="header" style={{ backgroundColor: bgColor }}>
            <div className="header-logo" style={{ color: logoColor }}>
                {renderLogo()}
                {brandName && <span className="header-brand">{brandName}</span>}
            </div>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="header-menu-toggle"
            >
                {isMenuOpen ? 'Close' : 'Menu'}
            </button>

            <Navigation navItems={menuItems.map(item => ({ label: item.label, link: item.href }))} orientation="horizontal" />

            {showUserIcon && (
                <div
                    className="header-user-icon"
                    onClick={onUserClick}
                >
                    <span className="material-icons" style={{ color: textColor }}>account_circle</span>
                </div>
            )}
        </header>
    );
};

export default Header;