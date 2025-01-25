import React from 'react';
import { Card } from '../card/card.tsx';
import './dynamic-grid.css';

interface DynamicGridProps {
    rows?: number; // Number of rows in the grid
    columns?: number; // Number of columns in the grid
    gap?: number; // Gap between grid items
    minItemWidth?: string; // Minimum width for each grid item
    itemPadding?: number; // Padding applied for each card
    itemBgColor?: string; // Background color class for the card
    renderItem?: (index: number) => React.ReactNode; // Callback to render each card's content
    aspectRatio?: string; // Aspect ratio class for grid items
    className?: string; // Custom classes for grid container
    cardElevation?: 'low' | 'high'; // Elevation level for each card
    cardRounded?: boolean; // Should the cards have rounded corners
    cardPadding?: boolean; // Should the cards have built-in padding
    cardOnClick?: (event: React.MouseEvent<HTMLDivElement>) => void; // Click handler for each card
}

const DynamicGrid: React.FC<DynamicGridProps> = ({
                                                     rows = 3,
                                                     columns = 3,
                                                     gap = 4,
                                                     minItemWidth = '150px',
                                                     itemPadding = 4, // Define padding for each card
                                                     itemBgColor = 'bg-gray-100',
                                                     renderItem = (index) => `Item ${index + 1}`,
                                                     aspectRatio = 'aspect-video',
                                                     className = '',
                                                     cardElevation = 'low',
                                                     cardRounded = true,
                                                     cardPadding = true,
                                                     cardOnClick = undefined,
                                                 }) => {
    // Grid container style
    const gridStyle = {
        gridTemplateColumns: `repeat(${columns}, minmax(${minItemWidth}, 1fr))`,
        gap: `${gap * 0.25}rem`,
    };

    // Generate list of items
    const items = Array.from({ length: rows * columns }, (_, index: number) => (
        <Card
            key={index} // React required key for list rendering
            className={`${itemBgColor} ${aspectRatio}`} // Background color and aspect ratio
            elevation={cardElevation} // Elevation for the card
            rounded={cardRounded} // Rounded corners
            padding={cardPadding} // Enable/disable padding
            onClick={cardOnClick} // Click handler, clickable if defined
            style={{
                padding: `${itemPadding}px`, // Properly using `itemPadding` to apply card spacing
            }}
        >
            {renderItem(index)} {/* Render dynamic card content */}
        </Card>
    ));

    return (
        <div
            style={gridStyle} // Apply grid styles (columns, gap)
            className={`dynamic-grid ${className}`.trim()} // Combine custom and default classes
        >
            {items}
        </div>
    );
};

export { DynamicGrid };
export default DynamicGrid;