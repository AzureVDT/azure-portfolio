import React from "react";
import { ProjectItemData } from "@/types/project.types";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

interface IPropertyItemProps {
    item: ProjectItemData;
}

const ProjectCard = ({ item }: IPropertyItemProps) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    if (!item) return null;

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
                <motion.div
                    className="relative h-52 md:h-72 rounded-t-xl group"
                    style={{
                        background: `url(${item.image[0]})`,
                        backgroundSize: "cover",
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full transition-all duration-500 bg-opacity-0 overlay bg-softDark rounded-t-xl group-hover:flex group-hover:bg-opacity-80"></div>
                </motion.div>
                <div className="px-4 py-6 mt-3 dark:text-white rounded-b-xl">
                    <h5 className="mb-2 text-xl font-semibold dark:text-graySoft">
                        {item.title}
                    </h5>
                </div>
            </div>
            <AnimatePresence>
                {modalIsOpen && (
                    <ReactModal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setIsOpen(false)}
                        overlayClassName="modal-overlay fixed inset-0 z-50 flex justify-center items-center"
                        className="relative outline-none modal-content"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={overlayVariants}
                            className="fixed inset-0 bg-black bg-opacity-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={modalVariants}
                            className="mt-[85px] w-full bg-graySoft max-w-[1280px] rounded-2xl 
                p-5 relative max-h-[85vh] dark:bg-darkStrock"
                        >
                            {/* Close button moved outside scrollable content */}
                            <button
                                className="absolute -top-4 -right-4 z-[60] flex items-center justify-center cursor-pointer w-11 h-11 text-text1 dark:text-whiteSoft bg-white dark:bg-darkStrock rounded-full shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            {/* Scrollable content wrapper */}
                            <div className="overflow-y-auto max-h-[calc(85vh-40px)]">
                                <ProjectDetails data={item} />
                            </div>
                        </motion.div>
                    </ReactModal>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;