import React from 'react';

interface LayoutSwitcherProps {
    currentLayout: 'top' | 'sidebar-left' | 'sidebar-right';
    onLayoutChange: (layout: 'top' | 'sidebar-left' | 'sidebar-right') => void;
}

const LayoutSwitcher: React.FC<LayoutSwitcherProps> = ({ currentLayout, onLayoutChange }) => {
    const layouts = ['top', 'sidebar-left', 'sidebar-right'];

    return (
        <div className="flex gap-4">
            {layouts.map((layout) => (
                <button
                    key={layout}
                    onClick={() => onLayoutChange(layout as 'top' | 'sidebar-left' | 'sidebar-right')}
                    className={`p-4 border rounded-lg flex-1 ${currentLayout === layout ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}
                >
                    {layout.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
            ))}
        </div>
    );
};

export default LayoutSwitcher;