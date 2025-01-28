import React from 'react';
import { footerMockData } from './data/footer-data';
import { mockHeaderData } from './data/header-data';
import mockMainData from './data/main-data';
import LandingLayout from '@layout/landing-layout/landing-layout';
import Section from '@components/section/section';
import Card from '@components/card/card';
import ContactUs from '@components/contact-us'; // Import the ContactUs component

const HomePage: React.FC = () => {
    const layoutConfig = {
        header: {
            height: '5rem',
            position: 'sticky' as const,
            maxWidth: 'full', // Allow the header to span the full width
            padding: '6',
        },
        main: {
            maxWidth: 'full', // Set to 'full' to remove the 7xl constraint
            padding: '6',
            isCentered: false, // Set to false to remove centering constraints
        },
        footer: {
            height: '4rem',
            position: 'relative' as const,
        },
    };


    return (
        <LandingLayout
            headerData={mockHeaderData}
            footerData={footerMockData}
            layoutConfig={layoutConfig}
        >
            <div className="space-y-16 sm:space-y-20">
                <Section
                    id="features"
                    title="Explore Our Features"
                    description="Learn about the amazing features we provide through these cards."
                    className="bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/src/assets/hero-bg.jpg)', // Path to your image
                    }}
                >
                    {mockMainData.heroItems.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            actionLink={item.actionLink}
                            actionText={item.actionText}
                        />
                    ))}
                </Section>




                <Section
                    id="about-us"
                    title="About Us"
                    description="We are a company dedicated to providing the best services."
                >
                    <Card
                        title="Our Mission"
                        description="To deliver quality services that empower our customers to achieve their goals."
                    />
                </Section>

                {/* Replace the Contact Section with the ContactUs Component */}
                <ContactUs
                    id="contact"
                    title="Contact Us"
                    description="We’d love to hear from you. Reach out to us through the following channels."
                    email="support@example.com"
                    phone="+1-800-555-1234"
                    address="456 Elm Street, Example City, Country"
                    className="max-w-4xl mx-auto px-6" // Custom width and spacing
                />
            </div>
        </LandingLayout>
    );
};

export default HomePage;
