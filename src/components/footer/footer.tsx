import React from 'react';
import Box from '@components/box.tsx';
import FooterNavigation from '@components/footer/footer-navigation';
import ContactInfo from '@components/footer/contact-info';
import SocialLinks from '@components/footer/social-links';
import Copyright from '@components/footer/copyright';

type MenuItemType = {
    label: string;
    href: string;
};

export interface FooterProps {
    menuItems: MenuItemType[];
    copyright?: string;
    contactInfo?: { email?: string; phone?: string };
    socialLinks?: { twitter?: string; linkedin?: string; facebook?: string };
    className?: string;
    style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({
    menuItems,
    copyright = '© 2023 Your Brand. All rights reserved.',
    contactInfo,
    socialLinks,
    className = '',
    style,
}) => {
    return (
        <Box
            as="footer"
            className={`w-full py-6 px-6 sm:px-8 text-[var(--text-primary)] ${className}`}
            style={{
                backgroundColor: `var(--footer-bg-color)`,
                color: `var(--footer-text-color)`,
                ...style,
            }}
        >
            <Box className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {menuItems.length > 0 && <FooterNavigation menuItems={menuItems} />}
                {contactInfo && <ContactInfo {...contactInfo} />}
                {socialLinks && <SocialLinks {...socialLinks} />}
                <Copyright text={copyright} />
            </Box>
        </Box>
    );
};

export default Footer;