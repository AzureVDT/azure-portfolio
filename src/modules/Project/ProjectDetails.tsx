import TextAreaAutoResize from "@/components/Textarea";
import { ProjectItemData } from "@/types/project.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Feedback from "../feedback/Feedback";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewFeedback } from "@/store/feedbacks.service";
import { FeedbackItemData } from "@/types/feedback.types";
import Viewer from "react-viewer";
import { toast } from "react-toastify";
import SkeletonProjectDetails from "@/components/skeleton/SkeletonProjectDetails";

interface IProjectDetailsProps {
    data: ProjectItemData;
}
const ProjectDetails = ({ data }: IProjectDetailsProps) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [visible, setVisible] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState(0);
    const queryClient = useQueryClient();
    const mutation = useMutation<FeedbackItemData, unknown, FeedbackItemData>({
        mutationFn: addNewFeedback,
        onSuccess: async (feedback) => {
            await queryClient.prefetchQuery(["feedback", feedback], () =>
                addNewFeedback(feedback)
            );
        },
    });


    React.useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <SkeletonProjectDetails />;

    const handleCreateNewFeedback = () => {
        const name = document.getElementById("textName") as HTMLInputElement;
        const content = document.getElementById(
            "txtMessage"
        ) as HTMLTextAreaElement;
        if (name.value && content.value) {
            mutation.mutate({
                name: name.value,
                content: content.value,
                createdAt: new Date().toISOString(),
                project_id: data.id,
            });
            name.value = "";
            content.value = "";
            toast.success("Send feedback successfully!");
        } else return;
    };
    return (
        <div>
            <Viewer
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                images={data.image.map((item) => ({ src: item }))}
                zIndex={10000}
                activeIndex={currentImage}
            />
            <div className="p-5">
                <div className="grid grid-cols-[2fr_1fr] gap-6">
                    <div
                        aria-label="left"
                        className="rounded-lg shadow-md dark:bg-darkStrock h-[600px] overflow-hidden"
                    >
                        <div aria-label="gallery" className="mb-4">
                            <div className="grid grid-cols-[3fr_1fr] grid-rows-[162px_162px] gap-5">
                                {data.image && data.image[0] && (
                                    <div
                                        className="relative row-[1/-1] col-[1/2] cursor-pointer"
                                        onClick={() => {
                                            setVisible(true);
                                            setCurrentImage(0);
                                        }}
                                    >
                                        <Image
                                            src={data.image[0]}
                                            fill
                                            alt={data.title}
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </div>
                                )}
                                {data.image &&
                                    data.image
                                        .slice(1, 3)
                                        .map((item, index) => (
                                            <div
                                                className="relative cursor-pointer"
                                                key={index}
                                                onClick={() => {
                                                    setVisible(true);
                                                    setCurrentImage(index + 1);
                                                }}
                                            >
                                                <Image
                                                    src={item}
                                                    fill
                                                    alt={data.title}
                                                    className="object-cover rounded-lg row-[1/2] h-full"
                                                />
                                                {index === 1 && (
                                                    <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white bg-black bg-opacity-50 rounded-">
                                                        <span>
                                                            +{data.image.length}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                            </div>
                        </div>
                        <div className="p-5">
                            <h2 className="text-[22px] font-medium mb-2">
                                {data.title}
                            </h2>
                            <div>
                                <h6 className="font-medium text-[18px]">
                                    Description
                                </h6>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                    <div aria-label="right" className="flex flex-col gap-5">
                        <div
                            aria-label="project-info"
                            className="flex flex-col items-center justify-center px-6 py-4 rounded-lg shadow-md dark:bg-darkStrock"
                        >
                            <Image
                                src={data.image[0]}
                                alt=""
                                width={400}
                                height={200}
                                className="w-full h-[200px] object-cover rounded-lg"
                            ></Image>
                            <div className="flex flex-wrap items-center justify-center gap-x-3">
                                {data.technique.map((item, index) => (
                                    <span
                                        key={index}
                                        className="inline-block px-2 py-1 mt-2 text-xs font-medium text-white rounded-lg cursor-pointer hover:bg-thirdly bg-primary"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-6">
                                <Link
                                    href={
                                        data.previewUrl ? data.previewUrl : {}
                                    }
                                    className={`flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-graySoft`}
                                    target={data.previewUrl && "_blank"}
                                    onClick={() => {
                                        if (!data.previewUrl) {
                                            toast.error(
                                                "This project is not available for preview!"
                                            );
                                        }
                                    }}
                                >
                                    Preview
                                </Link>
                                <Link
                                    href={data.gitUrl ? data.gitUrl : {}}
                                    className="flex items-center justify-center px-8 py-3 rounded-lg bg-thirdly text-graySoft"
                                    target={data.gitUrl && "_blank"}
                                    onClick={() => {
                                        if (!data.gitUrl) {
                                            toast.error(
                                                "This project is not available for preview!"
                                            );
                                        }
                                    }}
                                >
                                    Source Code
                                </Link>
                            </div>
                        </div>
                        <div
                            aria-label="feedback"
                            className="flex flex-col justify-center px-6 py-4 rounded-lg shadow-md dark:bg-darkStrock"
                        >
                            <h4 className="text-[18px] font-medium mb-4">
                                Write your feedback
                            </h4>
                            <div className="flex flex-col mb-5 gap-y-3">
                                <input
                                    id="textName"
                                    type="text"
                                    placeholder="Typing your display name"
                                    className="p-2 border rounded-lg outline-none border-grayf1 focus:border-thirdly"
                                />
                                <TextAreaAutoResize
                                    id="txtMessage"
                                    placeholder="Typing your feedback"
                                ></TextAreaAutoResize>
                                <button
                                    onClick={handleCreateNewFeedback}
                                    className="flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-graySoft"
                                >
                                    Send
                                </button>
                            </div>
                            <div>
                                <h4 className="text-[18px] font-medium mb-4">
                                    Feedback
                                </h4>
                                <Feedback id={data.id}></Feedback>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
