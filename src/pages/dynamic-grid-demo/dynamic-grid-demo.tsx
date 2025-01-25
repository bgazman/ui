import React, { useState } from 'react';
import DynamicGrid from '../../components/dynamic-grid/dynamic-grid.tsx'; // Assuming the DynamicGrid is in the same directory


const DynamicGridDemo: React.FC = () => {
    // State to keep track of rows and columns
    const [rows, setRows] = useState<number>(3); // Default is 3 rows
    const [columns, setColumns] = useState<number>(3); // Default is 3 columns

    // Handlers for adjusting rows and columns
    const handleRowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRows = Number(event.target.value);
        setRows(newRows > 0 ? newRows : 1); // Ensure at least one row
    };

    const handleColumnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColumns = Number(event.target.value);
        setColumns(newColumns > 0 ? newColumns : 1); // Ensure at least one column
    };

    return (
        <div className="dynamic-grid-demo">
            <div className="controls">
                {/* Selector for rows */}
                <div className="control">
                    <label htmlFor="rowsSelector">Number of Rows:</label>
                    <input
                        id="rowsSelector"
                        type="number"
                        value={rows}
                        min={1}
                        onChange={handleRowChange}
                        className="input"
                    />
                </div>

                {/* Selector for columns */}
                <div className="control">
                    <label htmlFor="columnsSelector">Number of Columns:</label>
                    <input
                        id="columnsSelector"
                        type="number"
                        value={columns}
                        min={1}
                        onChange={handleColumnChange}
                        className="input"
                    />
                </div>
            </div>

            {/* Render the DynamicGrid component */}
            <DynamicGrid
                rows={rows}
                columns={columns}
                gap={4} // Gap between grid items
                minItemWidth="150px" // Minimum item width
                itemBgColor="bg-blue-100" // Background color for cards
                renderItem={(index) => <span>Card {index + 1}</span>} // Render dynamic content inside cards
                cardRounded // Round card corners
                cardPadding // Enable card padding
                cardElevation="low" // Set card elevation level
                cardOnClick={(e) => console.log(`Card clicked! Index: ${e.currentTarget}`)} // Click handler
            />
        </div>
    );
};

export default DynamicGridDemo;