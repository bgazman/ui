import React from 'react';
import { footerMockData } from './data/footer-data';
import { mockHeaderData } from './data/header-data';
import mockMainData from './data/main-data';
import LandingLayout from '@layout/landing-layout/landing-layout';

const HomePage: React.FC = () => {
    const layoutConfig = {
        header: {
            height: '5rem',
            position: 'sticky' as const
        },
        main: {
            maxWidth: '6xl',
            padding: '6'
        },
        footer: {
            height: '4rem',
            position: 'relative' as const
        }
    };

    return (
        <LandingLayout
            headerData={mockHeaderData}
            mainData={mockMainData}
            footerData={footerMockData}
            layoutConfig={layoutConfig}
        >
            <div className="space-y-20">
                {mockMainData.heroItems.map((item, index) => (
                    <section key={index} className="text-center space-y-6">
                        <h1 className="text-4xl font-bold">{item.title}</h1>
                        <p className="text-lg text-gray-600">{item.description}</p>
                        <a
                            href={item.actionLink}
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            {item.actionText}
                        </a>
                    </section>
                ))}

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">About Us</h2>
                    <p className="text-gray-600">We are a company dedicated to providing the best services.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">Contact Us</h2>
                    <div className="space-y-2 text-gray-600">
                        <p>Email: contact@example.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                </section>
            </div>
        </LandingLayout>
    );
};

export default HomePage;