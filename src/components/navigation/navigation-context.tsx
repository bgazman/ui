import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextProps {
    activeItem: string;
    setActiveItem: (item: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeItem, setActiveItem] = useState<string>('');

    return (
        <NavigationContext.Provider value={{ activeItem, setActiveItem }}>
            {children}
        </NavigationContext.Provider>
    );
};