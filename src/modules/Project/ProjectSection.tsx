import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import ProjectTag from "./ProjectTag";
import { projects } from "@/utils/helper";
import { ProjectItemData } from "@/types/project.types";

const SkeletonCard = () => {
    return (
        <div className="animate-pulse">
            <motion.div
                className="relative bg-gray-200 h-52 md:h-72 rounded-t-xl dark:bg-gray-700"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut"
                }}
            />
            <div className="px-4 py-6 mt-3">
                <div className="w-3/4 h-4 mb-2 bg-gray-200 rounded dark:bg-gray-700" />
            </div>
        </div>
    );
};

const ProjectSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Simulate loading
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleTagChange = (newTag: string) => {
        setIsLoading(true);
        setTag(newTag);
        // Simulate loading when changing tags
        setTimeout(() => setIsLoading(false), 1000);
    };

    const filteredProjects = projects?.filter((project: ProjectItemData) =>
        project?.tag?.includes(tag)
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
                {isLoading ? (
                    [...Array(6)].map((_, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <SkeletonCard />
                        </motion.li>
                    ))
                ) : (
                    filteredProjects?.map((project: ProjectItemData, index: number) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <ProjectCard key={project.id} item={project} />
                        </motion.li>
                    ))
                )}
            </ul>
        </section>
    );
};

export default ProjectSection;