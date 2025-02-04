// docs-nav-items.ts
import { NavItem } from '@components/navigation/navigation';

export const docsHeaderItems: NavItem[] = [
    { label: 'Documentation', href: '/docs' },
    { label: 'API', href: '/api' },
    { label: 'Examples', href: '/examples' },
    { label: 'Community', href: '/community' }
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
            { label: 'Buttons', href: '/docs/components/button' },
            { label: 'Forms', href: '/docs/components/form' },
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