import React from "react";
import { motion } from "framer-motion";

interface ProjectTagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
    const buttonStyles = isSelected ? "primaryGradient" : "";

    const tagVariants = {
        initial: {
            scale: 1,
        },
        selected: {
            scale: 1.1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    return (
        <motion.button
            variants={tagVariants}
            initial="initial"
            animate={isSelected ? "selected" : "initial"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${buttonStyles} rounded-full border-2 px-8 py-2 text-xl cursor-pointer mb-5 hover:primaryGradient`}
            onClick={() => onClick(name)}
        >
            {name}
        </motion.button>
    );
};

export default ProjectTag;