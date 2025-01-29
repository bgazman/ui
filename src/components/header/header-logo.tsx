import React from "react";

type LogoType = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

interface HeaderLogoProps {
    logo?: string | LogoType;
    brandName?: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logo, brandName }) => {
    return (
        <div className="flex items-center space-x-2">
            {logo && (
                typeof logo === "string" ? (
                    <span className="text-xl font-bold">{logo}</span>
                ) : (
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width || 48}
                        height={logo.height || 48}
                        className="h-12 w-auto object-contain"
                    />
                )
            )}
            {brandName && <span className="text-xl font-semibold">{brandName}</span>}
        </div>
    );
};

export default HeaderLogo;