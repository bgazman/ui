import React from 'react';
import Box from '@components/box.tsx';
import FooterContactInfo from '@components/footer/footer-contact-info.tsx';
import FooterSocialLinks from '@components/footer/footer-social-links.tsx';
import FooterCopyright from '@components/footer/footer-copyright.tsx';
import HorizontalNavigation from '@components/navigation/horizontal-navigation.tsx';
import { NavItem } from '@components/navigation/navigation.tsx';

export interface FooterProps {
    footerNavItems: NavItem[];
    copyright?: string;
    contactInfo?: { email?: string; phone?: string };
    socialLinks?: { twitter?: string; linkedin?: string; facebook?: string };
    className?: string;
    style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({
                                           footerNavItems,
    copyright = '© 2023 Your Brand. All rights reserved.',
    contactInfo,
    socialLinks,
    className = '',
    style,
}) => {
    console.log('Footer menuItems:', footerNavItems); // Add this line to log menuItems

    return (
        <Box
            as="footer"
            className={`w-full py-6 px-6 sm:px-8 bg-footer text-footer-text ${className}`}
            style={style}
        >
            <Box className="w-full mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-x-6 md:space-y-0">
                <HorizontalNavigation
                    navItems={footerNavItems.map((item) => ({
                        label: item.label,
                        href: item.href,
                    }))}
                />
                {contactInfo && <FooterContactInfo {...contactInfo} />}
                {socialLinks && <FooterSocialLinks {...socialLinks} />}
                <FooterCopyright text={copyright} />
            </Box>
        </Box>
    );
};

export default Footer;