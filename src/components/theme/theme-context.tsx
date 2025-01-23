// theme-context.tsx
import React, { createContext, useContext, useState } from 'react';

export type Theme = 'light' | 'dark' | 'forest' | 'ocean';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div data-theme={theme}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};