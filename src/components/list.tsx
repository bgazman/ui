import React from "react";
import clsx from "clsx";
import Link from "@components/link";

export interface ListProps {
    items: { label: string; href?: string }[];
    spacing?: "none" | "normal" | "wide";
    direction?: "horizontal" | "vertical";
    onItemClick?: (label: string) => void;
    className?: string;
}

const List: React.FC<ListProps> = ({
                                       items,
                                       spacing = "normal",
                                       direction = "vertical",
                                       onItemClick,
                                       className = "",
                                   }) => {
    return (
        <ul
            className={clsx(
                "list-none",
                direction === "horizontal" ? "flex items-center" : "block",
                {
                    "space-y-2": direction === "vertical" && spacing === "normal",
                    "space-y-4": direction === "vertical" && spacing === "wide",
                    "space-x-4": direction === "horizontal" && spacing === "normal",
                    "space-x-6": direction === "horizontal" && spacing === "wide",
                },
                className
            )}
        >
            {items.map((item, index) => (
                <li
                    key={index}
                    onClick={() => onItemClick && onItemClick(item.label)}
                    className="flex items-center"
                >
                    {item.href ? (
                        <Link href={item.href} variant="primary" className="hover:text-secondary-foreground">
                            {item.label}
                        </Link>
                    ) : (
                        <span>{item.label}</span>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default List;