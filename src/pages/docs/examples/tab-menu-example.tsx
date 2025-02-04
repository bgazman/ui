import React, { useState } from 'react';
import TabMenu from '@components/tab-menu.tsx';

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
                return (
                    <div>
                        <h2>Content for Tab 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                );
            case 'tab2':
                return (
                    <div>
                        <h2>Content for Tab 2</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                );
            case 'tab3':
                return (
                    <div>
                        <h2>Content for Tab 3</h2>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
                );
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