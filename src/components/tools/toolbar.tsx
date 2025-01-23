import React, { useState, useEffect } from 'react';
import './toolbar.css';
import { User, Menu, X, Layout } from 'lucide-react';

const FloatingButton: React.FC<{
    children: React.ReactNode;
    onClick?: () => void;
    ariaLabel?: string;
    tooltip?: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    className?: string;
}> = ({ children, onClick, ariaLabel, tooltip, position = 'bottom-right', className = '' }) => {
    const positionStyles: Record<string, string> = {
        'bottom-right': 'toolbar-button-bottom-right',
        'bottom-left': 'toolbar-button-bottom-left',
        'top-right': 'toolbar-button-top-right',
        'top-left': 'toolbar-button-top-left',
    };

    return (
        <div className={`toolbar-button ${positionStyles[position]}`} title={tooltip}>
            <button
                onClick={onClick}
                aria-label={ariaLabel}
                className={`floating-button ${className}`}
            >
                {children}
            </button>
        </div>
    );
};

const Toolbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {
            id: 'layout-palette',
            label: 'Layout',
            icon: Layout,
        },
        {
            id: 'theme-palette',
            label: 'Theme',
            icon: User,
        }
    ];

    const handleMenuClick = (id: string) => {
        console.log(`Selected menu item: ${id}`);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isOpen && !target.closest('.toolbar')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="toolbar">
            <FloatingButton
                onClick={() => setIsOpen(!isOpen)}
                ariaLabel="Toggle menu"
                tooltip="Menu"
                position="bottom-right"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </FloatingButton>

            {isOpen && (
                <div className="toolbar-menu">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleMenuClick(item.id)}
                            className="menu-item"
                        >
                            {item.icon && <item.icon size={20} />}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Toolbar;