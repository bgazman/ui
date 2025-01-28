import React from 'react';
import Section from '@components/section/section'; // Import the Section component
import Form from '@components/form';

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
        // Replace this with actual form submission logic (e.g., API call)
    };

    return (
        <Section
            id={id}
            title={title}
            description={description}
            className={className}
            style={style}
        >
            <div className="flex flex-col items-center space-y-6">
                {/* Contact Information */}
                <div className="space-y-2 text-gray-600">
                    {email && (
                        <p>
                            <span className="font-semibold">Email:</span>{' '}
                            <a
                                href={`mailto:${email}`}
                                className="text-blue-600 hover:underline"
                            >
                                {email}
                            </a>
                        </p>
                    )}
                    {phone && (
                        <p>
                            <span className="font-semibold">Phone:</span>{' '}
                            <a
                                href={`tel:${phone}`}
                                className="text-blue-600 hover:underline"
                            >
                                {phone}
                            </a>
                        </p>
                    )}
                    {address && (
                        <p>
                            <span className="font-semibold">Address:</span> {address}
                        </p>
                    )}
                </div>

                {/* Form with Custom Width */}
                <Form
                    className="w-full max-w-3xl" // Custom width for the form
                    title="Send Us a Message"
                    description="Fill out the form below, and we’ll get back to you as soon as possible."
                    fields={[
                        {
                            name: 'name',
                            label: 'Name',
                            type: 'text',
                            placeholder: 'Your Name',
                            required: true,
                        },
                        {
                            name: 'email',
                            label: 'Email',
                            type: 'email',
                            placeholder: 'Your Email',
                            required: true,
                        },
                        {
                            name: 'message',
                            label: 'Message',
                            type: 'textarea',
                            placeholder: 'Your Message',
                            required: true,
                        },
                    ]}
                    buttonLabel="Submit"
                    onSubmit={handleFormSubmit}
                />
            </div>
        </Section>
    );
};

export default ContactUs;
