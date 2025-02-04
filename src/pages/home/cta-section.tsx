// CTASection.tsx
import { ChevronRight } from 'lucide-react';
import Button from "@components/button.tsx";
import AnimatedSection from "@components/animated-section.tsx";

const CTASection = () => (
    <AnimatedSection className="bg-bg-secondary py-xl"
             title="Ready to Transform Your Business?"
             subtitle="Let's discuss how our solutions can help you achieve your goals."
             description="Schedule a free consultation with our team to get started.">
            <Button variant="primary" >
                Schedule a Consultation
                <ChevronRight size={20} />
            </Button>
    </AnimatedSection>
);

export default CTASection;