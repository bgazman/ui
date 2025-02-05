import React, { useState, useEffect } from 'react';
import DashboardLayout from '@layout/dashboard-layout/dashboard-layout';
import { dashboardHeaderItems, dashboardFooterItems, dashboardNavItems } from './data/nav-items';

const DashboardPage: React.FC = () => {
    const [currentPath, setCurrentPath] = useState(() => {
        const hash = window.location.hash.replace('#', '');
        return hash || 'dashboard';
    });

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(window.location.hash.replace('#', ''));
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const DashboardContent = () => (
        <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard</h2>
            <p className="text-gray-600">Welcome to the dashboard...</p>
        </div>
    );

    const UsersContent = () => (
        <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Users</h2>
            <p className="text-gray-600">Manage your users here...</p>
        </div>
    );

    const GroupsContent = () => (
        <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Groups</h2>
            <p className="text-gray-600">Manage your groups here...</p>
        </div>
    );

    const PermissionsContent = () => (
        <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Permissions</h2>
            <p className="text-gray-600">Manage your permissions here...</p>
        </div>
    );

    const SecretsContent = () => (
        <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Secrets</h2>
            <p className="text-gray-600">Manage your secrets here...</p>
        </div>
    );

    const ClientsContent = () => (
        <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Clients</h2>
            <p className="text-gray-600">Manage your clients here...</p>
        </div>
    );

    const ApiDocsContent = () => (
        <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">API Docs</h2>
            <p className="text-gray-600">View your API documentation here...</p>
        </div>
    );

    const Router = () => {
        switch (currentPath) {
            case 'users':
                return <UsersContent />;
            case 'groups':
                return <GroupsContent />;
            case 'permissions':
                return <PermissionsContent />;
            case 'secrets':
                return <SecretsContent />;
            case 'clients':
                return <ClientsContent />;
            case 'api-docs':
                return <ApiDocsContent />;
            default:
                return <DashboardContent />;
        }
    };

    return (
        <DashboardLayout
            headerNavItems={dashboardHeaderItems}
            footerNavItems={dashboardFooterItems}
            sidebarItems={dashboardNavItems.map(item => ({
                ...item,
                onClick: () => setCurrentPath(item.href?.replace('#', '') || 'dashboard')
            }))}
        >
            <div className="space-y-16 sm:space-y-20">
                <Router />
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;