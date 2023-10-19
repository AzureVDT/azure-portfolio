import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import ProjectTag from "./ProjectTag";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/store/projects.service";
import { ProjectItemData } from "@/types/project.types";

const ProjectSection = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["projects"],
        queryFn: getProjects,
        refetchOnWindowFocus: false, // khi nhấn vào window sẽ fetch lại dữ liệu
        cacheTime: 24 * 10 * 60 * 60 * 1000, // thời gian lưu cache > stale: 1 day
        staleTime: 1 * 60 * 1000, // thời gian lấy dữ liệu từ cache: 1/2 day
    });
    const projects = data;
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projects?.filter((project: ProjectItemData) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="mt-[85px] primaryTitle">My Projects</h2>
            <div className="flex flex-row items-center justify-center gap-2 py-6 dark:text-white">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Desktop"
                    isSelected={tag === "Desktop"}
                />
            </div>
            <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
                {filteredProjects?.map(
                    (project: ProjectItemData, index: number) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <ProjectCard key={project.id} item={project} />
                        </motion.li>
                    )
                )}
            </ul>
        </section>
    );
};

export default ProjectSection;
