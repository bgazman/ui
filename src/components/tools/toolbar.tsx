import React from 'react';
import FloatingMenu from "../floating-menu/floating-menu";
import LayoutSwitcher from "../layout/components/layout-switcher/layout-switcher.tsx";
import ThemeSwitcher from "../theme/components/theme-switcher/theme-switcher.tsx";
import {useLayout} from "../layout/context/layout-context.tsx";

const Toolbar: React.FC = () => {
    const { layout, setLayout } = useLayout(); // Access context state/methods

    // Log current layout whenever it updates
    const handleLayoutChange = (newLayout: 'top' | 'sidebar-left' | 'sidebar-right') => {
        console.log('Layout changed to:', newLayout);
        setLayout(newLayout); // Update layout using context
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
                    <div className="toolar-menu-item">
                        <h3 className="text-sm font-medium mb-2">Layout</h3>
                        <LayoutSwitcher
                            currentLayout={layout as 'top' | 'sidebar-left' | 'sidebar-right'} // Cast needed due to context typing
                            onLayoutChange={handleLayoutChange}
                        />
                    </div>
                    <div className="toolar-menu-item">
                        <h3 className="text-sm font-medium mb-2">Theme</h3>
                        <ThemeSwitcher />
                    </div>
                </div>
            </FloatingMenu>
        </div>
    );
};

export default Toolbar;