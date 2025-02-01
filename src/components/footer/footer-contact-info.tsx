import React from 'react';
import Box from '@components/box';

interface ContactInfoProps {
    email?: string;
    phone?: string;
}

const FooterContactInfo: React.FC<ContactInfoProps> = ({ email, phone }) => {
    return (
        <Box className="flex space-x-4 items-center text-sm text-center md:text-right">
            {email && (
                <p>
                    Email:{' '}
                    <a href={`mailto:${email}`} className="text-[var(--button-hover-bg-color)] hover:underline">
                        {email}
                    </a>
                </p>
            )}
            {phone && (
                <p>
                    Phone:{' '}
                    <a href={`tel:${phone}`} className="text-[var(--button-hover-bg-color)] hover:underline">
                        {phone}
                    </a>
                </p>
            )}
        </Box>
    );
};

export default FooterContactInfo;
