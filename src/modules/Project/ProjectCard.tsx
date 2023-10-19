import React from "react";
import Link from "next/link";
import { ProjectItemData } from "@/types/project.types";
interface IPropertyItemProps {
    item: ProjectItemData;
}
const ProjectCard = ({ item }: IPropertyItemProps) => {
    if (!item) return null;
    return (
        <Link
            href={{
                pathname: "/project/[id]",
                query: { id: item.id },
            }}
        >
            <div
                className="relative h-52 md:h-72 rounded-t-xl group"
                style={{
                    background: `url(${item.image[0]})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full transition-all duration-500 bg-opacity-0 overlay bg-softDark rounded-t-xl group-hover:flex group-hover:bg-opacity-80"></div>
            </div>
            <div className="px-4 py-6 mt-3 dark:text-white rounded-b-xl">
                <h5 className="mb-2 text-xl font-semibold dark:text-graySoft">
                    {item.title}
                </h5>
            </div>
        </Link>
    );
};

export default ProjectCard;
