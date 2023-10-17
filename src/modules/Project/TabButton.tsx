import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
    const buttonClasses = active ? "text-white" : "text-text4";

    return (
        <button onClick={selectTab}>
            <p
                className={`mr-3 font-semibold hover:text-whiteSoft ${buttonClasses}`}
            >
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 mt-2 mr-3 bg-primary"
            ></motion.div>
        </button>
    );
};

export default TabButton;
