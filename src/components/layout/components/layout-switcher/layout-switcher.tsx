import React, { useEffect, useState } from "react";
import { layouts } from './layouts';
import { useLayout } from './layout-context';
import FloatingMenu from "../../../floating-menu/floating-menu";

const LayoutSwitcher = () => {
    const { layout, setLayout } = useLayout();
    const [isOpen, setIsOpen] = useState(false);

    const handleLayoutChange = (newLayout: string) => {
        console.log(newLayout);
        setLayout(newLayout);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !(event.target instanceof HTMLElement && event.target.closest('.layout-switcher'))) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="layout-switcher">
            <FloatingMenu
                title="Layout Options"
                width="w-96"
                buttonPosition="bottom-left"
                defaultOpen={isOpen}
                onOpenChange={setIsOpen}
            >
                <div className="space-y-2">
                    {layouts.map((layoutOption) => (
                        <button
                            key={layoutOption.id}
                            onClick={() => handleLayoutChange(layoutOption.id)}
                            className={`w-full p-3 text-left rounded hover:bg-gray-100 transition-colors
                                ${layout === layoutOption.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                        >
                            <div className="flex items-center gap-3">
                                {layoutOption.icon && React.createElement(layoutOption.icon)}
                                <span className="font-medium">{layoutOption.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </FloatingMenu>
        </div>
    );
};

export default LayoutSwitcher;