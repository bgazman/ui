import {FooterProps} from "@components/footer/footer.tsx";

export const footerMockData: FooterProps = {
    menuItems: [
        { label: "Home", href: "/" },
        { label: "Features", href: "#features" },
        { label: "About Us", href: "#about-us" },
        { label: "Contact", href: "#contact" }
    ],
    // contactInfo: {
    //     email: 'contact@example.com',
    //     phone: '123-456-7890',
    //     // address removed as it's not supported in the interface
    // },
    copyright: '© 2023 YourBrandName. All rights reserved.',
    socialLinks: {
        twitter: 'https://twitter.com/yourbrand',
        linkedin: 'https://linkedin.com/company/yourbrand',
        facebook: 'https://facebook.com/yourbrand'
    }
};