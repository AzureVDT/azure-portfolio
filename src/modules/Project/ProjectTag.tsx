import React from "react";
interface ProjectTagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean;
}
const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
    const buttonStyles = isSelected ? "primaryGradient" : "";
    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-8 py-2 text-xl cursor-pointer mb-5 hover:primaryGradient`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default ProjectTag;
