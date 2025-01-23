import React from 'react';


 type Contact = {
    email: string;
    address: string;
};
export interface ContactProps {
    contact: Contact;
}
const Contact: React.FC<ContactProps> = ({contact}) => {
    return (
        <div className="contact">
            <h4 className="contact-title">Contact Us</h4>
            <p className="contact-email">{contact.email}</p>
            <p className="contact-address">{contact.address}</p>
        </div>
    );
};

export default Contact;