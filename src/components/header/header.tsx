// Header.tsx
import React from 'react';
import './header.css';
import Navigation, {NavItem} from "../navigation/navigation.tsx";

type Logo = {
    src: string;
    alt: string;
};

interface HeaderProps {
    brandName: string;
    logo: Logo;
    navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ logo,navItems,brandName }) => {
    return (
        <header className="header bg-white shadow-md p-4">
            <div className="header-container container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="header-logo">
                    <a href={logo.src} className="header-brand text-xl font-bold text-gray-800">
                        {brandName}
                    </a>
                </div>

                <nav className="header-nav">
                    <Navigation navItems={navItems} />
                </nav>
            </div>
        </header>
    );
};

export default Header;