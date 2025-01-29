import React from "react";
import { useTheme, Theme } from "@theme/theme-context";
import { Sun, Moon, TreePine, Waves } from "lucide-react";

const ThemeSwitcher: React.FC = () => {
    const { theme, setTheme } = useTheme();

    // Cycles through the themes in order
    const handleThemeChange = () => {
        const themes: Theme[] = ["light", "dark", "forest", "ocean"];
        const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
        setTheme(nextTheme);

        // 🔥 Ensure font updates instantly
        setTimeout(() => {
            document.documentElement.style.fontFamily = getComputedStyle(document.documentElement)
                .getPropertyValue('--font-family-sans');
        }, 10);
    };

    // Map themes to icons
    const themeIcons = {
        light: <Sun size={20} />,
        dark: <Moon size={20} />,
        forest: <TreePine size={20} />,
        ocean: <Waves size={20} />
    };

    return (
        <button
            onClick={handleThemeChange}
            className="hover:opacity-80 transition-opacity"
            aria-label={`Switch to ${
                theme === "light" ? "Dark" : theme === "dark" ? "Forest" : theme === "forest" ? "Ocean" : "Light"
            } theme`}
        >
            {themeIcons[theme]}
        </button>
    );
};

export default ThemeSwitcher;
