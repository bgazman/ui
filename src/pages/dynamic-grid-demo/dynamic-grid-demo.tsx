import React, { useState } from 'react';
import TopbarLayout from '@layout/topbar-layout/topbar-layout';
import { mockHeaderData } from './data/header-data';

const DynamicGridDemo: React.FC = () => {
    const [currentLayout] = useState<'top' | 'sidebar-left' | 'sidebar-right'>('sidebar-left');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    console.log("[LayoutDemo] Current Layout State:", currentLayout); // Logs the current layout

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

    const handleSettingsClick = () => {
        const newDrawerState = !isDrawerOpen;
        console.log("[Settings Click] Toggling Drawer State to:", newDrawerState); // Logs new state on toggle
        setIsDrawerOpen(newDrawerState);
        console.log("[LayoutDemo] Current Layout State:", currentLayout); // Logs the current layout
    };

    return (
        <TopbarLayout header={mockHeaderData}>
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

                    {/* Button to toggle settings */}
                    <button onClick={handleSettingsClick}>Toggle Settings</button>
                </div>

                <div>Hello World</div>
            </div>
        </TopbarLayout>
    );
};

export default DynamicGridDemo;