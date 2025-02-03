import React from 'react';
import DashboardLayout from '@layout/dashboard-layout/dashboard-layout';
import { mockHeaderData } from './data/header-data';
import { mockFooterData } from './data/footer-data';
import { mockSidebarData } from './data/sidebar-data';

const DashboardPage: React.FC = () => {
    return (
        <DashboardLayout
            headerData={mockHeaderData}
            footerData={mockFooterData}
            sidebarData={mockSidebarData}

        >
            {/* The children go here */}
            <div className="space-y-16 sm:space-y-20">
                <section id="dashboard">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                    <p>Welcome to the dashboard...</p>
                </section>
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;
