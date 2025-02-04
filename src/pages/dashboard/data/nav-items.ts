// dashboard-nav-items.ts
import { NavItem } from '@components/navigation/navigation';
import {
    Home,
    Users,
    Settings,
    FileText,
    BarChart,
    Bell,
    MessageSquare
} from 'lucide-react';

export const dashboardNavItems: NavItem[] = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: Home
    },
    {
        label: 'Analytics',
        href: '/dashboard/analytics',
        icon: BarChart
    },
    {
        label: 'Users',
        href: '/dashboard/users',
        icon: Users
    },
    {
        label: 'Reports',
        href: '/dashboard/reports',
        icon: FileText,
        children: [
            { label: 'Monthly', href: '/dashboard/reports/monthly' },
            { label: 'Annual', href: '/dashboard/reports/annual' },
        ]
    },
    {
        label: 'Messages',
        href: '/dashboard/messages',
        icon: MessageSquare
    },
    {
        label: 'Notifications',
        href: '/dashboard/notifications',
        icon: Bell
    },
    {
        label: 'Settings',
        href: '/dashboard/settings',
        icon: Settings,
        children: [
            { label: 'Profile', href: '/dashboard/settings/profile' },
            { label: 'Security', href: '/dashboard/settings/security' },
            { label: 'Preferences', href: '/dashboard/settings/preferences' }
        ]
    }
];

export const dashboardHeaderItems: NavItem[] = [
    { label: 'Search', href: '/dashboard/search' },
    { label: 'Help', href: '/dashboard/help' }
];

export const dashboardFooterItems: NavItem[] = [
    { label: 'Support', href: '/support' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Privacy', href: '/privacy' }
];