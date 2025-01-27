import React from 'react';
import { layouts } from '@layout/layouts.ts';

interface LayoutSwitcherProps {
    currentLayout: string;
    onLayoutChange: (layout: string) => void;
}

const LayoutSwitcher: React.FC<LayoutSwitcherProps> = ({ currentLayout, onLayoutChange }) => {
    return (
        <div className="flex gap-4">
            {layouts.map(({ id, label, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => onLayoutChange(id)}
                    className={`p-4 border rounded-lg flex-1 ${currentLayout === id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}
                >
                    <Icon className="mr-2" />
                    {label}
                </button>
            ))}
        </div>
    );
};

export default LayoutSwitcher;