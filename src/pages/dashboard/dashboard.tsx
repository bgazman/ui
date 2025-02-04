import React from 'react';
import DashboardLayout from '@layout/dashboard-layout/dashboard-layout';
import { dashboardNavItems, dashboardHeaderItems, dashboardFooterItems } from './data/nav-items';

const DashboardPage: React.FC = () => {
    return (
<DashboardLayout
    headerNavItems={dashboardHeaderItems}
    footerNavItems={dashboardFooterItems}
    sidebarItems={dashboardNavItems}
>
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