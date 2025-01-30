import React, { useState } from 'react';
import TabMenu from '@components/tab-menu/tab-menu';

const tabMenuItems = [
    { label: 'Tab 1', value: 'tab1' },
    { label: 'Tab 2', value: 'tab2' },
    { label: 'Tab 3', value: 'tab3' },
];

const ExampleComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>(tabMenuItems[0].value);

    const renderContent = () => {
        switch (activeTab) {
            case 'tab1':
                return <div>Content for Tab 1</div>;
            case 'tab2':
                return <div>Content for Tab 2</div>;
            case 'tab3':
                return <div>Content for Tab 3</div>;
            default:
                return null;
        }
    };

    return (
        <div>
            <TabMenu items={tabMenuItems} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="mt-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default ExampleComponent;