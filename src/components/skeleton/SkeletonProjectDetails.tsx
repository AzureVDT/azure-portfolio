import React from "react";
import { motion } from "framer-motion";

const SkeletonProjectDetails = () => {
    return (
        <div className="p-5">
            <div className="grid grid-cols-[2fr_1fr] gap-6">
                {/* Left Column */}
                <div className="rounded-lg shadow-md dark:bg-darkStrock h-[600px] overflow-hidden">
                    {/* Gallery Grid */}
                    <div className="mb-4">
                        <div className="grid grid-cols-[3fr_1fr] grid-rows-[162px_162px] gap-5">
                            <motion.div
                                className="bg-gray-200 dark:bg-gray-700 row-[1/-1] col-[1/2] rounded-lg"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="bg-gray-200 rounded-lg dark:bg-gray-700"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.2
                                }}
                            />
                            <motion.div
                                className="bg-gray-200 rounded-lg dark:bg-gray-700"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.4
                                }}
                            />
                        </div>
                    </div>
                    {/* Title and Description */}
                    <div className="p-5">
                        <motion.div
                            className="w-3/4 mb-4 bg-gray-200 rounded h-7 dark:bg-gray-700"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="w-1/2 h-4 mb-2 bg-gray-200 rounded dark:bg-gray-700"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.2
                            }}
                        />
                        <motion.div
                            className="w-full h-4 bg-gray-200 rounded dark:bg-gray-700"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.4
                            }}
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-5">
                    {/* Project Info */}
                    <div className="flex flex-col items-center justify-center px-6 py-4 rounded-lg shadow-md dark:bg-darkStrock">
                        <motion.div
                            className="w-full h-[200px] bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <div className="flex flex-wrap justify-center w-full gap-2 mb-6">
                            {[1, 2, 3].map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="w-16 h-6 bg-gray-200 rounded-lg dark:bg-gray-700"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                />
                            ))}
                        </div>
                        <div className="grid w-full grid-cols-2 gap-5">
                            <motion.div
                                className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.2
                                }}
                            />
                        </div>
                    </div>

                    {/* Feedback Section */}
                    <div className="px-6 py-4 rounded-lg shadow-md dark:bg-darkStrock">
                        <motion.div
                            className="w-1/2 h-6 mb-4 bg-gray-200 rounded dark:bg-gray-700"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <div className="mb-5 space-y-3">
                            <motion.div
                                className="h-10 bg-gray-200 rounded dark:bg-gray-700"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="h-24 bg-gray-200 rounded dark:bg-gray-700"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.2
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProjectDetails;