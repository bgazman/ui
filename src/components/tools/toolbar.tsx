import React from 'react';
import FloatingMenu from "../floating-menu/floating-menu";
import LayoutSwitcher from "./components/layout-switcher/layout-switcher.tsx";
import ThemeSwitcher from "../theme/components/theme-switcher/theme-switcher.tsx";
import { useLayout } from "../layout/context/layout-context.tsx";

const Toolbar: React.FC = () => {
    const { dynamicLayout, setDynamicLayout } = useLayout(); // Access context state/methods

    const handleLayoutChange = (newLayout: string) => {
        if (newLayout === 'top' || newLayout === 'sidebar-left' || newLayout === 'sidebar-right') {
            console.log('Dynamic layout changed to:', newLayout);
            setDynamicLayout(newLayout); // Update dynamic layout using context
        } else {
            console.warn('Invalid layout:', newLayout);
        }
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
                            currentLayout={dynamicLayout as 'top' | 'sidebar-left' | 'sidebar-right'} // Cast needed due to context typing
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