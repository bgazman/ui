import { Sun, Moon, Palette, Check } from 'lucide-react';
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import {Theme, useTheme} from "@theme/theme-context";


// Theme Palette Component
interface ThemeConfig {
    name: string;
    icon: LucideIcon;
}

const themes: Record<string, ThemeConfig> = {
    light: {
        name: 'Light',
        icon: Sun,
    },
    dark: {
        name: 'Dark',
        icon: Moon,
    },
    forest: {
        name: 'Forest',
        icon: Palette,
    },
    ocean: {
        name: 'Ocean',
        icon: Palette,
    }
};

const ThemePalette = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const CurrentIcon = themes[theme].icon;

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Theme options"
            >
                <CurrentIcon className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                        {Object.entries(themes).map(([key, themeConfig]) => {
                            const Icon = themeConfig.icon;
                            return (
                                <button
                                    key={key}
                                    onClick={() => {
                                        setTheme(key as Theme);
                                        setIsOpen(false);
                                    }}
                                    className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                                    role="menuitem"
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    <span>{themeConfig.name}</span>
                                    {theme === key && (
                                        <Check className="w-4 h-4 ml-auto" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThemePalette;