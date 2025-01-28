import React from 'react';

interface GridProps extends Record<string, unknown> {
    children: React.ReactNode;
    columns?: number; // Number of columns in the grid
    gap?: string; // Spacing between grid items
    alignItems?: 'start' | 'center' | 'end' | 'stretch'; // Vertical alignment
    justifyItems?: 'start' | 'center' | 'end' | 'stretch'; // Horizontal alignment
    className?: string; // Additional classes
    style?: React.CSSProperties; // Inline styles
}

const Grid: React.FC<GridProps> = ({
                                       children,
                                       columns = 1,
                                       gap = '1rem',
                                       alignItems = 'stretch',
                                       justifyItems = 'stretch',
                                       className = '',
                                       style,
                                       ...rest
                                   }) => (
    <div
        className={`grid ${className}`}
        style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap,
            alignItems,
            justifyItems,
            ...style,
        }}
        {...rest}
    >
        {children}
    </div>
);

export default Grid;
