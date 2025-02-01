import React from "react";
import { LucideIcon } from "lucide-react";

type LogoType = {
    src?: string;
    alt: string;
    width?: number;
    height?: number;
    icon?: LucideIcon;
};

interface HeaderLogoProps {
    logo?: string | LogoType;
    brandName?: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logo, brandName }) => {
    return (
        <div className="flex items-center space-x-2">
            {logo &&
                (typeof logo === "string" ? (
                    <span className="text-xl font-bold">{logo}</span>
                ) : logo.icon ? (
                    <logo.icon className="h-12 w-auto" aria-label={logo.alt} />
                ) : (
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width || 48}
                        height={logo.height || 48}
                        style={{ backgroundColor: "transparent" }}
                        className="h-12 w-auto object-contain"
                    />
                ))}
            {brandName && <span className="text-xl font-semibold">{brandName}</span>}
        </div>
    );
};

export default HeaderLogo;
