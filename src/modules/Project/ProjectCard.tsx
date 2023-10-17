import React from "react";
import Link from "next/link";
interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
}
const ProjectCard = ({
    imgUrl,
    title,
    description,
    gitUrl,
    previewUrl,
}: ProjectCardProps) => {
    return (
        <Link href={`/details`}>
            <div
                className="relative h-52 md:h-72 rounded-t-xl group"
                style={{
                    background: `url(${imgUrl})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full transition-all duration-500 bg-opacity-0 overlay bg-softDark rounded-t-xl group-hover:flex group-hover:bg-opacity-80"></div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="mb-2 text-xl font-semibold text-graySoft">
                    {title}
                </h5>
                <p className="leading-relaxed">{description}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;
