import React from 'react';
import { footerMockData } from "./data/footer-data";
import { mockHeaderData } from "./data/header-data";
import LandingLayout from "@components/layout/components/landing-layout/landing-layout";

const mainProps = {

    children: <div>Main content goes here</div>
};

const HomePage: React.FC = () => {
    return (
        <LandingLayout
            header={mockHeaderData}
            main={mainProps}
            footer={footerMockData}
        />
    );
};

export default HomePage;