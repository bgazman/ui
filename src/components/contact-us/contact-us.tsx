import React from 'react';
import Section from '@components/section/section';
import Form from '@components/form/form';
import Box from '@components/box';
import AnimatedSection from "@components/animated-section/animated-section.tsx";

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
        // Handle form submission logic here
    };

    return (
        <AnimatedSection
            id={id}
            title={title}
            description={description}
            className={className}
        >
            <Box className="flex flex-col items-center space-y-[var(--spacing-lg)]">
                <Box className="space-y-[var(--spacing-sm)] text-[var(--text-secondary)]">
                    {email && (
                        <Box as="p">
                            <span className="font-semibold">Email:</span>{' '}
                            <a href={`mailto:${email}`} className="text-[var(--text-tertiary)] hover:underline">
                                {email}
                            </a>
                        </Box>
                    )}
                    {phone && (
                        <Box as="p">
                            <span className="font-semibold">Phone:</span>{' '}
                            <a href={`tel:${phone}`} className="text-[var(--text-tertiary)] hover:underline">
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
                {/* Note: We no longer pass "w-full" so that the centered variant can control the width */}
                <Form onSubmit={handleFormSubmit} variant="centered" />
            </Box>
        </AnimatedSection>
    );
};

export default ContactUs;
