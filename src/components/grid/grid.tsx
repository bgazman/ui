import React from 'react';

interface GridProps extends Record<string, unknown> {
    children: React.ReactNode;
    columns?: number;
    gap?: string;
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    className?: string;
    style?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = ({
                                       children,
                                       columns = 1,
                                       gap = '1rem',
                                       alignItems = 'stretch',
                                       justifyItems = 'stretch',
                                       justifyContent = 'start',
                                       className = '',
                                       style,
                                       ...rest
                                   }) => (
    <div
        className={`grid ${className}`}
        style={{
            // We rely on Tailwind for display: grid → className="grid"
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap,
            alignItems,
            justifyItems,
            justifyContent,
            ...style,
        }}
        {...rest}
    >
        {children}
    </div>
);

export default Grid;
