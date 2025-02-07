import React,{useState} from 'react';
import { mainNavItems, footerNavItems } from './data/nav-items.ts';
import LandingLayout from '@layout/landing-layout/landing-layout';
import Box from '@components/box';
import Section from '@components/section.tsx';
import Button from '@components/button.tsx';
import Badge from '@components/badge.tsx';
import Card from '@components/card.tsx';
import Form from "@components/form.tsx";
import TabMenu from '@components/tab-menu/tab-menu.tsx';
import ButtonGroup from "@components/button-group.tsx";
import Select from "@components/select.tsx";
import Modal from "@components/modal.tsx";
import Animated from '@components/animated.tsx';
import Divider from "@components/divider.tsx";

const HeroSection = () => {
    return (
        <Section className="min-h-screen relative bg-primary overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-surface-lowered opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-lowered to-transparent"></div>
            </div>

            <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center text-content">
                <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6">
                    Transform Your Vision Into Reality
                </h1>

                <p className="text-xl md:text-2xl mb-12 max-w-2xl text-content-muted">
                    Create stunning digital experiences that captivate your audience and drive results
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Animated type="bounce" delay={0.2}>
                        <Button variant="primary" size="large">
                            Get Started
                        </Button>
                    </Animated>
                    <Animated type="inline-block" delay={0.4}>
                        <Button variant="primary" size="large">
                            Learn More
                        </Button>
                    </Animated>
                </div>

                <Divider  thickness="medium" className="my-8" />

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-lowered/40 to-transparent"></div>
            </div>
        </Section>
    );
};

const HeroSectionWithBadges = () => {
    return (
        <Section className="min-h-screen relative bg-secondary overflow-hidden">
            {/* Background Overlays */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-surface-lowered opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-surface-lowered to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center text-content">
                {/* Badges */}
                <div className="flex gap-3 mb-6">

                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="danger">Danger</Badge>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6">
                    Elevate Your Brand with Innovation
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl mb-12 max-w-2xl text-content-muted">
                    Stand out with cutting-edge technology and seamless user experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="button-large button-success">
                        Start Now
                    </Button>
                    <Button className="button-large button-danger">
                        Special Offer
                    </Button>
                </div>

                {/* Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-lowered/40 to-transparent"></div>
            </div>
        </Section>
    );
};
const HeroSectionWithCards = () => {
    return (
        <Section className="min-h-screen relative bg-primary overflow-hidden">
            {/* Background Overlays */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-surface-lowered opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-surface-lowered to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-24 flex flex-col items-center text-center text-content">
                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6">
                    Experience the Power of Innovation
                </h1>

                <p className="text-xl md:text-2xl mb-12 max-w-2xl text-content-muted">
                    Unlock limitless possibilities with our cutting-edge solutions.
                </p>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                    <Card title="Welcome" description="This is a basic card">
                        <p>Custom content inside the card.</p>
                    </Card>

                    <Card title="Elevated Card" description="This card has a shadow effect" variant="elevated" />
                    <Card title="Bordered Card" description="Outlined card variant" variant="bordered" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-12">
                    <Animated className="inline-block">

                    <Button className="button-large button-primary">
                        Get Started
                    </Button>
                    </Animated>
                    <Animated className="inline-block">
                    <Button className="button-large button-secondary">
                        Contact Us
                    </Button>
                    </Animated>
                </div>

                {/* Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-lowered/40 to-transparent"></div>
            </div>
        </Section>
    );
};


const HeroSectionWithForm = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Section className="min-h-screen relative bg-surface overflow-hidden">
            {/* Background Overlays */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-surface-lowered opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-surface-lowered to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Text Content */}
                <div className="text-center lg:text-left max-w-xl">
                    <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 text-content">
                        Get in Touch with Us
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-content-muted">
                        We’re here to help! Fill out the form, and we’ll get back to you as soon as possible.
                    </p>
                </div>

                {/* Form */}
                <div className="w-full max-w-lg bg-surface-elevated p-6 rounded-lg shadow-lg border border-border">
                    <Form
                        variant="default"
                        fields={[
                            { type: "input", name: "name", label: "Your Name", placeholder: "John Doe" },
                            { type: "input", name: "email", label: "Email Address", placeholder: "example@example.com", error: "Invalid email" },
                            { type: "textarea", name: "message", label: "Message", placeholder: "Write something..." },
                        ]}
                        onSubmit={(data) => console.log("Form Submitted", data)}
                    />

                    <Form
                        variant="card"
                        fields={[
                            { type: "input", name: "username", label: "Username", placeholder: "Your username" },
                            { type: "input", name: "password", label: "Password", placeholder: "******", error: "Required" },
                        ]}
                        onSubmit={(data) => console.log("Card Form Submitted", data)}
                    />

                    <Form
                        variant="minimal"
                        fields={[
                            { type: "input", name: "search", label: "Search", placeholder: "Type something..." },
                        ]}
                        onSubmit={(data) => console.log("Minimal Form Submitted", data)}
                    />

                    <Form
                        variant="bordered"
                        fields={[
                            { type: "textarea", name: "feedback", label: "Your Feedback", placeholder: "Tell us your thoughts" },
                        ]}
                        onSubmit={(data) => console.log("Bordered Form Submitted", data)}
                    />
                    <ButtonGroup
                        buttons={[
                            { label: "Option 1", onClick: () => console.log("Clicked 1") },
                            { label: "Option 2", onClick: () => console.log("Clicked 2") },
                            { label: "Option 3", onClick: () => console.log("Clicked 3") },
                        ]}
                        variant="default"
                    />

                    <ButtonGroup
                        buttons={[
                            { label: "Outlined 1", onClick: () => console.log("Clicked 1") },
                            { label: "Outlined 2", onClick: () => console.log("Clicked 2") },
                            { label: "Outlined 3", onClick: () => console.log("Clicked 3") },
                        ]}
                        variant="outlined"
                    />

                    <ButtonGroup
                        buttons={[
                            { label: "Pill 1", onClick: () => console.log("Clicked 1") },
                            { label: "Pill 2", onClick: () => console.log("Clicked 2") },
                            { label: "Pill 3", onClick: () => console.log("Clicked 3") },
                        ]}
                        variant="pill"
                    />

                    <ButtonGroup
                        buttons={[
                            { label: "Option 1" },
                            { label: "Option 2" },
                            { label: "Option 3" },
                        ]}
                        variant="segmented"
                        defaultActive={1} // Start with "Option 2" active
                    />

                    <Animated type="bounce" delay={0.1}>
                        <Select
                            options={["Option 1", "Option 2", "Option 3"]}
                            variant="default"
                            placeholder="Choose an option"
                        />
                    </Animated>

                    <Animated type="bounce" delay={0.2}>
                        <Select
                            options={["Apple", "Banana", "Cherry"]}
                            variant="outlined"
                            placeholder="Pick a fruit"
                        />
                    </Animated>
                    <Divider thickness="thick" />

                    <Animated type="bounce" delay={0.3}>
                        <Select
                            options={["React", "Vue", "Angular"]}
                            variant="filled"
                            placeholder="Favorite Framework"
                        />
                    </Animated>
                    <div className="flex flex-col items-center justify-center h-screen">
                        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                            Open Modal
                        </Button>

                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title="No More Jumping!"
                            variant="default"
                            size="md"
                        >
                            <p>This modal now prevents layout shifting on open.</p>
                        </Modal>
                    </div>




                </div>
            </div>
        </Section>
    );
};


const HeroSectionWithTabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleSubmit = (data: Record<string, string>) => {
        console.log('Form Submitted:', data);
    };

    const tabItems = [
        { label: 'Tab 1', value: 'tab1' },
        { label: 'Tab 2', value: 'tab2' },
        { label: 'Tab 3', value: 'tab3' },
        { label: 'Tab 4', value: 'tab4' },
    ];

    return (
        <Section className="min-h-screen relative bg-surface overflow-hidden">
            {/* Background Overlays */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-surface-lowered opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-surface-lowered to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-24 flex flex-col  gap-12">
                {/* Tab Menu */}
<TabMenu items={tabItems} activeTab={activeTab} setActiveTab={setActiveTab} />
                {/* Tab Content */}
                <div className="w-full max-w-lg bg-surface-elevated p-6 rounded-lg shadow-lg border border-border">
                    {activeTab === 'tab1' && (
                        <div>
                            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 text-content">
                                Tab 1 Content
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-content-muted">
                                Content for Tab 1 goes here.
                            </p>
                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div>
                            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 text-content">
                                Tab 2 Content
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-content-muted">
                                Content for Tab 2 goes here.
                            </p>
                        </div>
                    )}
                    {activeTab === 'tab3' && (
                        <div>
                            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 text-content">
                                Tab 3 Content
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-content-muted">
                                Content for Tab 3 goes here.
                            </p>
                        </div>
                    )}
                    {activeTab === 'tab4' && (
                        <div>
                            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 text-content">
                                Tab 4 Content
                            </h1>
                            <Form
                                fields={[
                                    { type: 'input', name: 'name', label: 'Full Name', placeholder: 'Enter your name' },
                                    { type: 'input', name: 'email', label: 'Email', placeholder: 'Enter your email' },
                                    { type: 'textarea', name: 'message', label: 'Message', placeholder: 'Write your message...' },
                                ]}
                                onSubmit={handleSubmit}
                                className="form-elevated"
                            />
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};


const HomePage: React.FC = () => {
    return (
        <LandingLayout
            headerNavItems={mainNavItems}
            footerNavItems={footerNavItems}
            className="bg-primary text-primary"
        >
            <Box className="space-y-16 sm:space-y-20">
                <HeroSectionWithTabs />
                <Divider thickness="thick" />

                <HeroSection />
                <HeroSectionWithBadges />
                <HeroSectionWithCards />
                <HeroSectionWithForm />
            </Box>
        </LandingLayout>
    );
};

export default HomePage;