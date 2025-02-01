// ContactUs.tsx
import React from 'react';
import Section from '@components/section/section.tsx';
import Form from '@components/input/form.tsx';
import Box from '@components/box.tsx';

interface ContactUsProps {
    id?: string;
    title?: string;
    description?: string;
    email?: string;
    phone?: string;
    address?: string;
    className?: string;
    style?: React.CSSProperties;
}

const ContactUs: React.FC<ContactUsProps> = ({
                                                 id,
                                                 title = 'Contact Us',
                                                 description = 'We’d love to hear from you. Please fill out the form below or reach us directly.',
                                                 email = 'contact@example.com',
                                                 phone = '123-456-7890',
                                                 address = '123 Main Street, City, Country',
                                                 className = '',
                                                 style,
                                             }) => {
    const handleFormSubmit = (data: Record<string, string>) => {
        console.log('Form Data Submitted:', data);
    };

    return (
        <Section
            id={id}
            title={title}
            description={description}
            className={className}
            style={style}
        >
            <Box className="flex flex-col items-center space-y-[var(--spacing-lg)]">
                <Box className="space-y-[var(--spacing-sm)] text-[var(--text-secondary)]">
                    {email && (
                        <Box as="p">
                            <span className="font-semibold">Email:</span>{' '}
                            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                                {email}
                            </a>
                        </Box>
                    )}
                    {phone && (
                        <Box as="p">
                            <span className="font-semibold">Phone:</span>{' '}
                            <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
                                {phone}
                            </a>
                        </Box>
                    )}
                    {address && (
                        <Box as="p">
                            <span className="font-semibold">Address:</span> {address}
                        </Box>
                    )}
                </Box>
                <Form className="w-full" onSubmit={handleFormSubmit} variant="centered" />
            </Box>
        </Section>
    );
};

export default ContactUs;
