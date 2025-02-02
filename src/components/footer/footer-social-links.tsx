import React from 'react';
import Box from '@components/box';
import { Facebook as FacebookIcon, Linkedin as LinkedinIcon, X as TwitterIcon } from 'lucide-react';

export interface SocialLinksProps {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
}

const FooterSocialLinks: React.FC<SocialLinksProps> = ({ twitter, linkedin, facebook }) => {
    return (
        <Box className="footer__social-links">
            {twitter && (
                <a
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="footer__link"
                >
                    <TwitterIcon size={20} className="hover:text-[var(--button-hover-bg-color)] transition-colors" />
                </a>
            )}
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__link">
                    <LinkedinIcon size={20} className="hover:text-[var(--button-hover-bg-color)] transition-colors" />
                </a>
            )}
            {facebook && (
                <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__link">
                    <FacebookIcon size={20} className="hover:text-[var(--button-hover-bg-color)] transition-colors" />
                </a>
            )}
        </Box>
    );
};

export default FooterSocialLinks;
