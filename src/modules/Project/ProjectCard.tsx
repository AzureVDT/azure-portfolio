import React from "react";
import { ProjectItemData } from "@/types/project.types";
import ReactModal from "react-modal";
import ProjectDetails from "./ProjectDetails";
interface IPropertyItemProps {
    item: ProjectItemData;
}
const ProjectCard = ({ item }: IPropertyItemProps) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    if (!item) return null;
    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
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
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50
                    flex justify-center items-center"
                className="mt-[85px] modal-content w-full bg-graySoft max-w-[1280px] rounded-2xl 
                outline-none p-5 relative max-h-[85vh] overflow-y-auto scroll-hidden dark:bg-darkStrock"
            >
                <button
                    className="absolute top-0 right-0 z-10 flex items-center justify-center cursor-pointer w-11 h-11 text-text1 dark:text-whiteSoft"
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
                <ProjectDetails data={item}></ProjectDetails>
            </ReactModal>
        </>
    );
};

export default ProjectCard;
