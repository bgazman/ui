import { NavItem } from '@components/navigation.tsx';
        import { Home, Users, Settings, Shield, Key, FileJson } from 'lucide-react';
export const dashboardNavItems:NavItem[] = [
    { icon: Home, label: 'Dashboard', href: '#dashboard' },
    { icon: Users, label: 'Users', href: '#users' },
    { icon: Users, label: 'Groups', href: '#groups' },
    { icon: Shield, label: 'Permissions', href: '#permissions' },
    { icon: Key, label: 'Secrets', href: '#secrets' },
    { icon: Settings, label: 'Clients', href: '#clients' },
    { icon: FileJson, label: 'API Docs', href: '#api-docs' }
];

        export const dashboardHeaderItems: NavItem[] = [
            { label: 'Home', href: '/' },
            { label: 'Documentation', href: '/docs' },
            { label: 'Dashboard', href: '/dashboard' }
        ];

        export const dashboardFooterItems: NavItem[] = [
            { label: 'Support', href: '/support' },
            { label: 'Documentation', href: '/docs' },
            { label: 'Privacy', href: '/privacy' }
        ];