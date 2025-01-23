import { Sun, Moon } from 'lucide-react';
import './theme-switcher.css';
import { useTheme } from '../../theme-context.tsx';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        // Optional: Synchronize with localStorage if needed
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="theme-btn"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="theme-icon" />
            ) : (
                <Sun className="theme-icon" />
            )}
        </button>
    );
};

export default ThemeSwitcher;