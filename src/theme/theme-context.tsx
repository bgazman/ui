import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'forest' | 'ocean' | 'desert';
interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // Get saved theme from localStorage or default to 'light'
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem('theme') as Theme) || 'light';
    });

    // Apply theme on mount & when theme changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); // Apply theme globally
        localStorage.setItem('theme', theme);

        // 🔥 Force reflow to apply the new font dynamically
        setTimeout(() => {
            const newFont = getComputedStyle(document.documentElement)
                .getPropertyValue('--font-family-sans')
                .trim(); // Get the font from CSS variables
            document.documentElement.style.fontFamily = newFont;
        }, 10); // Small delay to allow CSS updates
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="theme-container" data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// Custom Hook for easier theme access
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};
