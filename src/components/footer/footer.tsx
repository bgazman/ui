import React from 'react';

export interface FooterProps {
    links?: { label: string; href: string }[];
    copyright?: string;
    contactInfo?: { email?: string; phone?: string };
    className?: string;
    style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({
                                           links = [],
                                           copyright = '© 2023 Your Brand. All rights reserved.',
                                           contactInfo,
                                           className = '',
                                           style,
                                       }) => {
    return (
        <footer
            className={`w-full bg-gray-100 text-gray-600 py-4 px-6 sm:px-8 ${className}`}
            style={style}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Links */}
                <nav className="flex space-x-6">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="hover:text-blue-500 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Contact Information */}
                {contactInfo && (
                    <div className="text-sm space-y-1 text-center md:text-right">
                        {contactInfo.email && <p>Email: {contactInfo.email}</p>}
                        {contactInfo.phone && <p>Phone: {contactInfo.phone}</p>}
                    </div>
                )}

                {/* Copyright */}
                <p className="text-sm text-center md:text-right">
                    {copyright}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
