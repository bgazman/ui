import React from "react";

export type DrawerVariant = "left" | "right" | "top" | "bottom";

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    variant?: DrawerVariant;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const Drawer: React.FC<DrawerProps> = ({
                                           isOpen,
                                           onClose,
                                           variant = "left",
                                           children,
                                           className = "",
                                           style,
                                       }) => {
    const baseStyles = "fixed inset-0 bg-black/50 z-50";
    const drawerStyles = {
        base: "bg-bg-primary rounded-md shadow-lg p-lg absolute transition-normal ease-DEFAULT",
        left: "left-0 h-full w-sidebar -translate-x-full",
        right: "right-0 h-full w-sidebar translate-x-full",
        top: "top-0 w-full h-sidebar -translate-y-full",
        bottom: "bottom-0 w-full h-sidebar translate-y-full"
    };

    const transformStyles = {
        left: "translate-x-0",
        right: "translate-x-0",
        top: "translate-y-0",
        bottom: "translate-y-0"
    };

    return (
        <div className={`${baseStyles} ${isOpen ? 'block' : 'hidden'}`}>
            <div
                className={`
                    ${drawerStyles.base}
                    ${drawerStyles[variant]}
                    ${isOpen ? transformStyles[variant] : ''}
                    ${className}
                `}
                style={style}
            >
                <button
                    className="absolute top-sm right-sm text-xl text-text-primary hover:text-text-secondary focus:outline-none"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="mt-lg">
                    {children}
                </div>
            </div>
        </div>
    );
};