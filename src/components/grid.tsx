import React, { forwardRef } from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    columns?: number;
    gap?: string;
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    className?: string | 'grid';
}

const Grid = forwardRef<HTMLDivElement, GridProps>(({
                                                        children,
                                                        columns = 1,
                                                        gap = '1rem',
                                                        alignItems = 'stretch',
                                                        justifyItems = 'stretch',
                                                        justifyContent = 'start',
                                                        className = 'grid',
                                                        style,
                                                        ...rest
                                                    }, ref) => (
    <div
        ref={ref}
        className={className}
        style={{
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
));

export default Grid;
