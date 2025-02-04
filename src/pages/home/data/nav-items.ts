// main-nav-items.ts
import { NavItem } from '@components/navigation/navigation';

export const mainNavItems: NavItem[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Features',
        href: '/features'
    },
    {
        label: 'Documentation',
        href: '/docs',
        children: [
            {
                label: 'Getting Started',
                href: '/docs/getting-started'
            },
            {
                label: 'Components',
                href: '/docs/components'
            },
            {
                label: 'API Reference',
                href: '/docs/api'
            }
        ]
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];

export const footerNavItems: NavItem[] = [
    {
        label: 'Privacy',
        href: '/privacy'
    },
    {
        label: 'Terms',
        href: '/terms'
    },
    {
        label: 'Careers',
        href: '/careers'
    },
    {
        label: 'Blog',
        href: '/blog'
    }
];