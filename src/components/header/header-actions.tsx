import React from "react";
import ThemeSwitcher from "@components/theme-switcher";

interface HeaderActionsProps {
    mobile?: boolean;
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ mobile = false }) => {
    return (
        <div className={`flex ${mobile ? "flex-col space-y-4 mt-4" : "items-center space-x-4"}`}>
            <ThemeSwitcher />
            <a href="#" className="font-medium text-center">Sign In</a>
            <a
                href="#"
                className="text-center inline-block px-4 py-2 rounded bg-[var(--button-bg-color)] text-[var(--button-text-color)]"
            >
                Sign Up
            </a>
        </div>
    );
};

export default HeaderActions;