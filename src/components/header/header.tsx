import React from "react";
import HeaderContainer from "./header-container";
import { NavItem } from "@components/navigation/navigation.tsx";

export interface HeaderProps {
    className?: string;
    style?: React.CSSProperties;
    logo?: string | { src: string; alt: string; width?: number; height?: number };
    headerNavItems: NavItem[];
    brandName?: string;
    position?: "fixed" | "sticky" | "relative";
}

const Header: React.FC<HeaderProps> = (props) => {
    return <HeaderContainer {...props} />;
};

export default Header;