import React from 'react';
import Box from '@components/box';
import FooterContactInfo from '@components/footer/footer-contact-info';
import FooterSocialLinks from '@components/footer/footer-social-links';
import FooterCopyright from '@components/footer/footer-copyright';
import { NavItem } from '@components/navigation/navigation';
import FooterNavigation from './footer-navigation';
import HorizontalNavigation from "@components/navigation/horizontal-navigation.tsx";

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
                                           className = 'footer',
                                           style,
                                       }) => {
    return (
        <Box as="footer" className={className} style={style}>
            <Box className="footer__inner">
                <HorizontalNavigation navItems={footerNavItems} className={className}/>
                {contactInfo && <FooterContactInfo {...contactInfo} />}
                {socialLinks && <FooterSocialLinks {...socialLinks} />}
                <FooterCopyright text={copyright} />
            </Box>
        </Box>
    );
};

export default Footer;
