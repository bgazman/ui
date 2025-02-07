// docs-nav-items.ts
import { NavItem } from '@components/navigation.tsx';

export const docsHeaderItems: NavItem[] = [

    { label: 'Home', href: '/' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Dashboard', href: '/dashboard' },
];

export const docsSidebarItems: NavItem[] = [
    {
        label: 'Getting Started',
        children: [
            { label: 'Introduction', href: '/docs/introduction' },
            { label: 'Installation', href: '/docs/installation' },
            { label: 'Quick Start', href: '/docs/quick-start' }
        ]
    },
    {
        label: 'Components',
        children: [
            { label: 'Button', href: '#button-component' },
            { label: 'Badge', href: '#badge-component' },
            { label: 'Navigation', href: '/docs/components/navigation' },
            { label: 'Layout', href: '/docs/components/layout' }
        ]
    },
    {
        label: 'Guides',
        children: [
            { label: 'Theming', href: '/docs/guides/theming' },
            { label: 'Styling', href: '/docs/guides/styling' },
            { label: 'Architecture', href: '/docs/guides/architecture' }
        ]
    }
];

export const docsFooterItems: NavItem[] = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Discord', href: 'https://discord.com' },
    { label: 'Twitter', href: 'https://twitter.com' }
];