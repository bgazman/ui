import React from 'react';
import FloatingMenu from "../floating-menu/floating-menu";
import { useLayout } from "@layout/context/layout-context";
import LayoutSwitcher from "@tools/components/layout-switcher/layout-switcher";
import ThemeSwitcher from "@theme/components/theme-switcher/theme-switcher";

const Toolbar: React.FC = () => {
    const { dynamicLayout, setDynamicLayout } = useLayout(); // Access context state/methods

    const handleLayoutChange = (newLayout: string) => {
        console.log('Dynamic layout changed to:', newLayout);
        setDynamicLayout(newLayout); // Update dynamic layout using context
    };

    return (
        <div className="toolbar">
            <FloatingMenu
                defaultOpen={false}
                title="Toolbar Menu"
                width="w-96"
                buttonPosition="bottom-left"
            >
                <div className="toolbar-menu">
                    <div className="toolbar-menu-item">
                        <h3 className="text-sm font-medium mb-2">Layout</h3>
                        <LayoutSwitcher
                            currentLayout={dynamicLayout || 'content'} // Default to 'content-layout' if dynamicLayout is null
                            onLayoutChange={handleLayoutChange}
                        />
                    </div>
                    <div className="toolbar-menu-item">
                        <h3 className="text-sm font-medium mb-2">Theme</h3>
                        <ThemeSwitcher />
                    </div>
                </div>
            </FloatingMenu>
        </div>
    );
};

export default Toolbar;