import React from 'react';
import Box from '@components/box.tsx';
import FooterNavigation from '@components/footer/footer-navigation';
import FooterContactInfo from '@components/footer/footer-contact-info.tsx';
import FooterSocialLinks from '@components/footer/footer-social-links.tsx';
import FooterCopyright from '@components/footer/footer-copyright.tsx';

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
                backgroundcolor: `var(--footer-bg-color)`,
                color: `var(--footer-text-color)`,
                ...style,
            }}
        >
<Box className="w-full mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-x-6 md:space-y-0">
    {menuItems.length > 0 && <FooterNavigation menuItems={menuItems} />}
    {contactInfo && <FooterContactInfo {...contactInfo} />}
    {socialLinks && <FooterSocialLinks {...socialLinks} />}
    <FooterCopyright text={copyright} />
</Box>
        </Box>
    );
};

export default Footer;