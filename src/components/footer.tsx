import React from 'react';
import Box from '@components/box.tsx'; // Import the Box component
import Navigation from '@components/navigation.tsx'; // Import the Navigation component

type MenuItemType = {
    label: string;
    href: string;
};
export interface FooterProps {
    menuItems: MenuItemType[];
    copyright?: string;
    contactInfo?: { email?: string; phone?: string };
    className?: string;
    style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({
                                           menuItems ,
                                           copyright = '© 2023 Your Brand. All rights reserved.',
                                           contactInfo,
                                           className = '',
                                           style,
                                       }) => {
    return (
        <Box
            as="footer"
            className={`w-full bg-gray-100 text-gray-600 py-4 px-6 sm:px-8 ${className}`}
            style={style}
        >
            <Box className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Navigation Links */}
                {menuItems.length > 0 && (
                    <Navigation
                        className="flex space-x-6"
                        orientation="horizontal"
                        navItems={menuItems.map((item) => ({
                            label: item.label,
                            link: item.href,
                        }))}
                    />
                )}

                {/* Contact Information */}
                {contactInfo && (
                    <Box className="text-sm text-left md:flex md:justify-end md:space-x-4">
                        {contactInfo.email && (
                            <p className="md:mb-0">
                                Email: <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">{contactInfo.email}</a>
                            </p>
                        )}
                        {contactInfo.phone && (
                            <p className="md:mb-0">
                                Phone: <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:underline">{contactInfo.phone}</a>
                            </p>
                        )}
                    </Box>



                )}

                {/* Copyright */}
                <Box as="p" className="text-sm text-center md:text-right">
                    {copyright}
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
