import { motion, HTMLMotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedProps extends HTMLMotionProps<"div"> {
    className?: string;
    children?: ReactNode;
    type?: "bounce" | "flip" | "inline-block" | "modal";
    delay?: number;
}

const animationVariants = {
    bounce: { y: [0, -30, 0] },
    flip: { rotateY: [0, 180, 0] },
    "inline-block": { display: "inline-block" },
    modal: { opacity: [0, 1], scale: [0.9, 1] },
};

const hoverVariants = {
    bounce: { scale: 1.1 },
    flip: { scale: 1.1 },
    "inline-block": { scale: 1.1 },
    modal: {},
};

const Animated: React.FC<AnimatedProps> = ({ className, children, type = "bounce", delay = 0, ...props }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, ...animationVariants[type] }}
            whileHover={hoverVariants[type]}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay,
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Animated;