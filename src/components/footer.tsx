import React from 'react';
import Box from '@components/box.tsx';
import { NavItem } from '@components/navigation/navigation.tsx';
import HorizontalNavigation from '@components/navigation/horizontal-navigation.tsx';
import { Facebook as FacebookIcon, Linkedin as LinkedinIcon, X as TwitterIcon } from 'lucide-react';

interface CopyrightProps {
    text: string;
}

const FooterCopyright: React.FC<CopyrightProps> = ({ text }) => {
    return (
        <Box as="p" className="text-sm text-center md:text-right">
            {text}
        </Box>
    );
};

export interface FooterProps {
    footerNavItems: NavItem[];
    copyright?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({
                                           footerNavItems,
                                           copyright = '© 2023 Your Brand. All rights reserved.',
                                           className = 'flex items-center justify-between p-[var(--spacing-md)] h-full bg-[var(--bg-alt1)]',
                                           style,
                                       }) => {
    return (
        <footer className={className} style={style}>
            <HorizontalNavigation
                navItems={footerNavItems.map((item) => ({
                    label: item.label,
                    href: item.href,
                }))}
            />
            <FooterCopyright text={copyright} />
        </footer>
    );
};

export default Footer;
