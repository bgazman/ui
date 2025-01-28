interface GridProps extends Record<string, unknown> {
    children: React.ReactNode;
    columns?: number;
    gap?: string;
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'; // New Prop
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
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap,
            alignItems,
            justifyItems,
            justifyContent,
            placeItems: justifyContent === 'center' ? 'center' : undefined, // New logic for centering rows
            ...style,
        }}
        {...rest}
    >
        {children}
    </div>
);
export default Grid;