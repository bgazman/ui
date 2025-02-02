import React from "react";
import "@components/drawer/drawer.css";

export type DrawerVariant = "left" | "right" | "top" | "bottom";

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    variant?: DrawerVariant;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Drawer: React.FC<DrawerProps> = ({
                                           isOpen,
                                           onClose,
                                           variant = "left",
                                           children,
                                           className = "",
                                           style,
                                       }) => {
    return (
        <div className={`drawer-overlay ${isOpen ? "drawer-overlay--open" : ""}`}>
            <div
                className={`drawer drawer--${variant} ${className}`}
                style={style}
            >
                <button className="drawer__close" onClick={onClose}>
                    &times;
                </button>
                <div className="drawer__content">{children}</div>
            </div>
        </div>
    );
};

export default Drawer;
