import React from 'react';
import { footerMockData } from "./data/footer-data.ts";
import { mockHeaderData } from "./data/header-data.ts";
import LandingLayout from "../../components/layout/components/landing-layout/landing-layout.tsx";

const mainProps = {
    bgColor: "var(--main-bg)",
    textColor: "var(--main-text-color)",
    padding: "var(--main-padding)",
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