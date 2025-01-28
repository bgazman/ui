import React from 'react';
import { footerMockData } from './data/footer-data';
import { mockHeaderData } from './data/header-data';
import mockMainData from './data/main-data';
import LandingLayout from '@layout/landing-layout/landing-layout';
import Section from '@components/section/section';
import Card from '@components/card/card';

const HomePage: React.FC = () => {
    const layoutConfig = {
        header: {
            height: '6rem',
            position: 'sticky' as const,
            maxWidth: '7xl',
            padding: '8',
        },
        main: {
            maxWidth: '6xl',
            padding: '6',
            isCentered: true,
        },
        footer: {
            height: '4rem',
            position: 'relative' as const,
        },
    };

    const contactData = {
        email: 'contact@example.com',
        phone: '123-456-7890',
    };

    return (
        <LandingLayout
            headerData={mockHeaderData}
            mainData={mockMainData}
            footerData={footerMockData}
            layoutConfig={layoutConfig}
        >
            <div className="space-y-16 sm:space-y-20">
                <Section
                    title="Explore Our Features"
                    description="Learn about the amazing features we provide through these cards."
                >
                    {mockMainData?.heroItems?.length > 0 ? (
                        mockMainData.heroItems.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                actionLink={item.actionLink}
                                actionText={item.actionText}
                            />
                        ))
                    ) : (
                        <p className="text-gray-600 text-center">
                            No features available at this time.
                        </p>
                    )}
                </Section>

                <Section
                    title="About Us"
                    description="We are a company dedicated to providing the best services."
                >
                    <Card
                        title="Our Mission"
                        description="To deliver quality services that empower our customers to achieve their goals."
                    />
                </Section>

                <Section
                    title="Contact Us"
                    description="Get in touch with us for more information!"
                >
                    <Card
                        title="Reach Out"
                        description="Feel free to email us or give us a call."
                    >
                        <div className="space-y-2 text-gray-600">
                            {contactData.email && <p>Email: {contactData.email}</p>}
                            {contactData.phone && <p>Phone: {contactData.phone}</p>}
                        </div>
                    </Card>
                </Section>
            </div>
        </LandingLayout>
    );
};

export default HomePage;