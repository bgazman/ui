import React from "react";
import LinkComponent from "@components/link/link";
import "./footer-navigation.css";
import {NavItem} from "@components/navigation/navigation";

export interface FooterNavigationProps {
    navItems: NavItem[];
    className?: string;
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({
                                                               navItems,
                                                               className = "",
                                                           }) => {
    return (
        <footer className={`footer-nav ${className}`}>
            <nav className="footer-nav__container" role="menubar">
                {navItems.map((item) => (
                    <LinkComponent
                        key={item.label}
                        href={item.href || "#"}
                        className="footer-nav__link"
                        role="menuitem"
                    >
                        {item.label}
                    </LinkComponent>
                ))}
            </nav>
        </footer>
    );
};

export default FooterNavigation;
