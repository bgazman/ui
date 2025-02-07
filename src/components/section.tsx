import React from "react";
import clsx from "clsx";

export type SectionVariant = "default" | "bordered" | "card" | "full-width";
export type SectionLayout = "container" | "fluid" | "centered";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    footer?: React.ReactNode;
    variant?: SectionVariant;
    layout?: SectionLayout;
    className?: string;
}

const Section: React.FC<SectionProps> = ({
                                             title,
                                             footer,
                                             variant = "default",
                                             layout = "container",
                                             className = "",
                                             children,
                                             ...props
                                         }) => {
    const sectionClass = clsx(
        "py-12 px-6", // Base spacing
        {
            default: "bg-surface text-content",
            bordered: "border border-secondary rounded-lg shadow-sm",
            card: "bg-secondary shadow-lg rounded-xl p-8 border border-secondary",
            "full-width": "w-full p-12",
        }[variant],
        {
            container: "max-w-7xl mx-auto",
            fluid: "w-full",
            centered: "flex justify-center items-center text-center",
        }[layout],
        className
    );

    return (
        <section className={sectionClass} {...props}>
            {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
            <div>{children}</div>
            {footer && <div className="mt-6">{footer}</div>}
        </section>
    );
};

export default Section;
