import React, { useState, ReactNode, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import FloatingButton from "./components/floating-button/floating-button";

interface FloatingMenuProps {
    title?: string;
    width?: string;
    className?: string;
    children?: ReactNode;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    buttonPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    icons?: {
        open: ReactNode;
        close: ReactNode;
    };
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({
                                                       title = "Menu",
                                                       width = "w-80", // Tailwind width remains available until you decide on custom styles
                                                       className = "",
                                                       children,
                                                       defaultOpen = false,
                                                       onOpenChange,
                                                       buttonPosition = "bottom-right",
                                                       icons = {
                                                           open: <Menu className="w-6 h-6" />,
                                                           close: <X className="w-6 h-6" />
                                                       }
                                                   }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(defaultOpen);
    }, [defaultOpen]);

    const toggleDrawer = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        onOpenChange?.(newState);
    };

    return (
        <>
            <FloatingButton
                onClick={toggleDrawer}
                ariaLabel={isOpen ? 'Close menu' : 'Open menu'}
                position={buttonPosition}
            >
                {isOpen ? icons.close : icons.open}
            </FloatingButton>
            <div
                className={`floating-menu-dialog ${isOpen ? 'floating-menu-dialog-open' : ''} ${className}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="menu-title"
            >
                <div className={`floating-menu-content ${width}`}>
                    <h2 id="menu-title" className="floating-menu-title">{title}</h2>
                    {children}
                </div>
            </div>
        </>
    );
};

export default FloatingMenu;