import React from 'react';
import Box from '@components/box';
import FooterContactInfo from '@components/footer/footer-contact-info';
import FooterSocialLinks from '@components/footer/footer-social-links';
import FooterCopyright from '@components/footer/footer-copyright';
import HorizontalNavigation from '@components/navigation/horizontal-navigation';
import { NavItem } from '@components/navigation/navigation';

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
    return (
        <Box
            as="footer"
            className={`w-full py-6 px-6 sm:px-8 bg-[var(--footer-bg-color)] text-[var(--footer-text-color)] ${className}`}
            style={style}
        >
            <Box className="w-full mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-x-6 md:space-y-0">
                <HorizontalNavigation
                    className="footer-navigation"
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
