import React from "react";
import clsx from "clsx";

export type TypographyVariant = "title" | "subtitle" | "body" | "caption";
export type TypographyElement = "p" | "span" | "h1" | "h2" | "h3" | "blockquote" | "label";
export type TypographyFont = "sans" | "serif" | "mono";
export type TypographyAlign = "left" | "center" | "right" | "justify";
export type TypographyWeight = "light" | "normal" | "bold";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    as?: TypographyElement;
    variant?: TypographyVariant;
    font?: TypographyFont;
    align?: TypographyAlign;
    weight?: TypographyWeight;
    italic?: boolean;
    truncate?: boolean; // ✅ Single-line truncation
    lineClamp?: number; // ✅ Multi-line truncation
    className?: string;
}

const Typography: React.FC<TypographyProps> = ({
                                                   as: Component = "p",
                                                   variant = "body",
                                                   font = "sans",
                                                   align = "left",
                                                   weight = "normal",
                                                   italic = false,
                                                   truncate = false,
                                                   lineClamp,
                                                   className = "",
                                                   children,
                                                   ...props
                                               }) => {
    const typographyClass = clsx(
        {
            title: "text-2xl md:text-3xl font-bold",
            subtitle: "text-xl md:text-2xl font-semibold",
            body: "text-base md:text-lg",
            caption: "text-sm text-content-muted",
        }[variant],
        {
            sans: "font-sans",
            serif: "font-serif",
            mono: "font-mono",
        }[font],
        {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
        }[align],
        {
            light: "font-light",
            normal: "font-normal",
            bold: "font-bold",
        }[weight],
        italic && "italic",
        truncate && "truncate", // ✅ Apply Tailwind's single-line truncation
        lineClamp && `line-clamp-${lineClamp}`, // ✅ Apply Tailwind's multi-line truncation
        className
    );

    return (
        <Component className={typographyClass} {...props}>
            {children}
        </Component>
    );
};

export default Typography;
