import React from "react";
import ThemeSwitcher from "@components/theme-switcher";
import Button from "@components/button/button";

interface HeaderActionsProps {
    mobile?: boolean;
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ mobile = false }) => {
    return (
        <div className={`flex ${mobile ? "flex-col space-y-4 mt-4" : "items-center space-x-4"}`}>
            <ThemeSwitcher />
            <Button variant="secondary" className="text-center">
                Sign In
            </Button>
            <Button variant="primary" className="text-center">
                Sign Up
            </Button>
        </div>
    );
};

export default HeaderActions;
