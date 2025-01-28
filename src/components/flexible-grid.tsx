import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface FlexibleGridProps {
    children: ReactNode;
    minWidth?: number; // Minimum width of a grid item
    gap?: string; // Gap between grid items
    className?: string; // Additional CSS classes
    style?: React.CSSProperties; // Inline styles
}

const FlexibleGrid: React.FC<FlexibleGridProps> = ({
    children,
    minWidth = 250,
    gap = '1rem',
    className = '',
    style = {},
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [columns, setColumns] = useState(1);

    const updateLayout = () => {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.offsetWidth;
        const optimalColumns = Math.floor(containerWidth / minWidth);
        setColumns(Math.max(1, optimalColumns));
    };

    useEffect(() => {
        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, [minWidth]);

    useEffect(() => {
        const observer = new ResizeObserver(updateLayout);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [containerRef.current]);

return (
    <div
        ref={containerRef}
        className={`flexible-grid ${className}`}
        style={{
            display: 'grid',
            gridTemplateColumns: `repeat(3, minmax(${minWidth}px, 1fr))`, // Fixed to 3 columns for testing
            gap,
            ...style,
        }}
    >
        {children}
    </div>
);
};

export default FlexibleGrid;