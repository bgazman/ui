import React from 'react';

export interface FooterProps {
    contact: string;
    note: string;
    bgColor?: string;
    textColor?: string;
    padding?: string;
}

const Footer: React.FC<FooterProps> = ({
    contact,
    note,
    bgColor = "var(--color-footer-background)",
    textColor = "var(--color-footer-text)",
    padding = "var(--footer-padding)"
}) => {
    return (
        <footer className="footer-section" style={{ backgroundColor: bgColor, color: textColor, padding: padding }}>
            <div className="footer-container">
                <div className="footer-contact">
                    <p>{contact}</p>
                </div>
                <div className="footer-note">
                    <p>{note}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;