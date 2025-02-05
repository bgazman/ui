// CTASection.tsx
import Form from "@components/form.tsx";
import AnimatedSection from "@components/animated-section.tsx";

const CTASection = () => {
    const handleSubmit = (data: Record<string, string>) => {
        console.log("Form submitted:", data);
    };

    return (
        <AnimatedSection
            id="cta"
            className="bg-bg-secondary py-xl"
            title="Ready to Transform Your Business?"
            subtitle="Let's discuss how our solutions can help you achieve your goals."
            description="Fill out the form below to get started."
            variant="center"
        >
            <Form onSubmit={handleSubmit} className="mx-auto" />
        </AnimatedSection>
    );
};

export default CTASection;