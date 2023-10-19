import HeadContent from "@/components/HeadConent";
import TextAreaAutoResize from "@/components/Textarea";
import { getProject } from "@/store/projects.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProjectDetails = () => {
    const router = useRouter();
    const id = parseInt(router.query.id as string);
    const { data, isLoading, error } = useQuery({
        queryKey: ["project", id],
        queryFn: () => getProject(id),
        staleTime: 1 * 60 * 1000,
        enabled: !!id,
    });
    if (!data || error) return null;
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="mt-[85px]">
            <HeadContent
                title={data.title}
                image={data.image && data.image[0]}
            ></HeadContent>
            <div className="p-5">
                <h2 className="flex items-center gap-5 mb-6 text-xl font-medium">
                    <span
                        className="cursor-pointer"
                        onClick={() => router.push("/#projects")}
                    >
                        <svg
                            width="9"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.79292 0.792893C8.18345 1.18342 8.18345 1.81658 7.79292 2.20711L2.00003 8L7.79292 13.7929C8.18345 14.1834 8.18345 14.8166 7.79292 15.2071C7.4024 15.5976 6.76923 15.5976 6.37871 15.2071L0.585817 9.41422C-0.195233 8.63317 -0.195231 7.36683 0.585817 6.58579L6.37871 0.792893C6.76923 0.402369 7.4024 0.402369 7.79292 0.792893Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                    Details
                </h2>
                <div className="grid grid-cols-[2fr_1fr] gap-6">
                    <div
                        aria-label="left"
                        className="rounded-lg shadow-md dark:bg-darkStrock"
                    >
                        <div aria-label="gallery" className="mb-4">
                            <div className="grid grid-cols-[3fr_1fr] grid-rows-[162px_162px] gap-5">
                                {data.image && data.image[0] && (
                                    <div className="relative row-[1/-1] col-[1/2] cursor-pointer">
                                        <Image
                                            src={data.image[0]}
                                            fill
                                            alt=""
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
                                            >
                                                <Image
                                                    src={item}
                                                    fill
                                                    alt=""
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
                                    href={data.previewUrl}
                                    className="flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-graySoft"
                                >
                                    Preview
                                </Link>
                                <Link
                                    href={data.gitUrl}
                                    className="flex items-center justify-center px-8 py-3 rounded-lg bg-thirdly text-graySoft"
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
                                    type="text"
                                    placeholder="Typing your display name"
                                    className="p-2 border rounded-lg outline-none border-grayf1 focus:border-thirdly"
                                />
                                <TextAreaAutoResize placeholder="Typing your feedback"></TextAreaAutoResize>
                                <button className="flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-graySoft">
                                    Send
                                </button>
                            </div>
                            <div>
                                <h4 className="text-[18px] font-medium mb-4">
                                    Feedback
                                </h4>
                                <div className="flex flex-col p-3 border rounded-lg border-graySoft dark:bg-darkStrock bg-grayf1 gap-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-[18px]">
                                            Azure
                                        </span>
                                        <span className="text-xs cursor-pointer">
                                            3 hour ago
                                        </span>
                                    </div>
                                    <hr className="border border-text3" />
                                    <span>Good job!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
