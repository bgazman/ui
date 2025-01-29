import React from 'react';
import Box from '@components/box';
import { Facebook as FacebookIcon, Linkedin as LinkedinIcon, X as TwitterIcon } from 'lucide-react';

interface SocialLinksProps {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
}

const FooterSocialLinks: React.FC<SocialLinksProps> = ({ twitter, linkedin, facebook }) => {
    return (
        <Box className="flex space-x-4">
            {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                    <TwitterIcon size={20} className="hover:text-blue-500 transition-colors" />
                </a>
            )}
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedinIcon size={20} className="hover:text-blue-700 transition-colors" />
                </a>
            )}
            {facebook && (
                <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FacebookIcon size={20} className="hover:text-blue-600 transition-colors" />
                </a>
            )}
        </Box>
    );
};

export default FooterSocialLinks;