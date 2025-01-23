import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FloatingButton from '../floating-button/floating-button';
import './floating-menu.css';

interface FloatingMenuProps {
    title?: string;
    width?: string;
    className?: string;
    children?: React.ReactNode;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    buttonPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    icons?: {
        open?: React.ReactNode;
        close?: React.ReactNode;
    };
}

const FloatingMenu = ({
                          title = "Menu",
                          width = "w-80",
                          className = "",
                          children,
                          defaultOpen = false,
                          onOpenChange,
                          buttonPosition = "bottom-right",
                          icons = {
                              open: <Menu className="w-6 h-6" />,
                              close: <X className="w-6 h-6" />
                          }
                      }: FloatingMenuProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleDrawer = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        onOpenChange?.(newState);
    };

    return (
        <>
            <FloatingButton
                onClick={toggleDrawer}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                position={buttonPosition}
            >
                {isOpen ? icons.close : icons.open}
            </FloatingButton>

            <div
                className={`floating-menu ${isOpen ? 'open' : ''} ${className}`}
                style={{ width }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="menu-title"
            >
                <div className="floating-menu-content">
                    <h2 id="menu-title" className="floating-menu-title">{title}</h2>
                    {children}
                </div>
            </div>
        </>
    );
};

export default FloatingMenu;