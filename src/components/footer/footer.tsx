import React from 'react';

export interface FooterProps {
    className?: string;
    contact: string;
    note: string;
}

const Footer: React.FC<FooterProps> = ({
    contact,
    note,

}) => {
    return (
        <footer className="footer" >
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