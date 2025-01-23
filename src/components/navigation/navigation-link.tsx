import React from 'react';

interface NavigationLinkProps {
    link: string;
    label: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ link, label }) => {
    return (
        <li>
            <a href={link} className="navigation-link">{label}</a>
        </li>
    );
};

export default NavigationLink;