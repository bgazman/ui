// SidebarProvider.tsx and useSidebar.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItem } from '@components/navigation/navigation.tsx';

type SidebarContextType = {
    openSections: Set<string>;
    toggleSection: (label: string) => void;
    activeItem: string;
    setActiveItem: (label: string) => void;
    sideBarMenuItems: { label: string; items: NavItem[] }[];
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};

type SidebarProviderProps = {
    children: React.ReactNode;
    sideBarMenuItems: { label: string; items: NavItem[] }[];
};

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children, sideBarMenuItems }) => {
    const location = useLocation();
    const [openSections, setOpenSections] = useState<Set<string>>(new Set([]));
    const [activeItem, setActiveItem] = useState<string>('');

    useEffect(() => {
        const currentPath = location.pathname + location.hash;
        sideBarMenuItems.forEach(section => {
            section.items.forEach(item => {
                if (item.href === currentPath) {
                    setActiveItem(item.label);
                }
            });
        });
    }, [location, sideBarMenuItems]);

    const toggleSection = (label: string) => {
        const newOpenSections = new Set(openSections);
        if (newOpenSections.has(label)) {
            newOpenSections.delete(label);
        } else {
            newOpenSections.add(label);
        }
        setOpenSections(newOpenSections);
    };

    return (
        <SidebarContext.Provider
            value={{
                openSections,
                toggleSection,
                activeItem,
                setActiveItem,
                sideBarMenuItems,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
