import React from 'react';
import './footer.css';
import Contact  from './components/contact/contact.tsx';
import Note from './components/note/note.tsx';


export interface FooterProps {
    contact: Contact;
    note: Note;
}


const Footer: React.FC<FooterProps> = ({contact, note}) => {
    return (
        <footer id="contact" className="footer-section">
            <div className="footer-container">
                <Contact contact={contact}/>
                <Note note={note}/>
            </div>
        </footer>
    );
};

export default Footer;