import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItem } from '@components/navigation/navigation.tsx';

type SidebarContextType = {
    openSections: Set<string>;
    toggleSection: (label: string) => void;
    activeItem: string;
    setActiveItem: (label: string) => void;
    sidebarData: { label: string; children: NavItem[] }[];
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
    sidebarData: { label: string; children: NavItem[] }[];
};

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children, sidebarData }) => {
    const location = useLocation();
    const [openSections, setOpenSections] = useState<Set<string>>(new Set([]));
    const [activeItem, setActiveItem] = useState<string>('');

    useEffect(() => {
        const currentPath = location.pathname + location.hash;
        sidebarData.forEach(section => {
            section.children.forEach(item => {
                if (item.href === currentPath) {
                    setActiveItem(item.label);
                }
            });
        });
    }, [location, sidebarData]);

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
                sidebarData,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};