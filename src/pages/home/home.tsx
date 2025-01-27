import React from 'react';
import { footerMockData } from './data/footer-data';
import { mockHeaderData } from './data/header-data';
import mockMainData from './data/main-data';
import LandingLayout from '@layout/landing-layout/landing-layout';

const HomePage: React.FC = () => {
    return (
        <LandingLayout
            headerData={mockHeaderData}
            mainData={mockMainData}
            footerData={footerMockData}
        >
            {mockMainData.heroItems.map((item, index) => (
                <section key={index} className="intro">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <a href={item.actionLink}>{item.actionText}</a>
                </section>
            ))}
            <section className="about">
                <h2>About Us</h2>
                <p>We are a company dedicated to providing the best services.</p>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Email: contact@example.com</p>
                <p>Phone: 123-456-7890</p>
            </section>
        </LandingLayout>
    );
};

export default HomePage;