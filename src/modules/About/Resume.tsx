import { BriefcaseIcon } from "@/components/icon";
import React from "react";

const edu = [
    {
        time: "August 2018 - May 2021",
        place: "Ngo Gia Tu",
        edu: "High school",
        description:
            "I gained an interest in the IT industry after feeling a sense of accomplishment from solving problems with programming I learned in high school.",
    },
    {
        time: "September 2021 - Now",
        place: "Industrial University of Ho Chi Minh City",
        edu: "Software Engineering",
        description:
            "I'm studying at the university to learn more about programming and to be able to work in the IT industry in the future.",
    },
];

const Resume = () => {
    return (
        <>
            <h3 className="primaryTitle">EDUCATION & EXPERIENCE</h3>
            <div className="grid grid-cols-2">
                <div
                    className="w-[calc(50%-1rem)] md:w-full leading-relaxed"
                    data-aos="fade-right"
                >
                    {edu.map((item, i) => (
                        <div
                            className="mb-3 relative p-[0_20px_0_60px] before:absolute before:top-0 
                            before:left-[20px] before:w-[1px] before:h-full before:z-[-1] before:bg-text2 text-base"
                            key={i}
                        >
                            <div className="absolute top-0 left-0 flex items-center justify-center p-2 mr-1 text-base border-none rounded-full outline-none w-40px h-40px bg-thirdly">
                                <BriefcaseIcon></BriefcaseIcon>
                            </div>
                            <span className="text-xs p-[4px_10px] inline-block mb-[12px] rounded-[20px] font-semibold opacity-80 bg-thirdly">
                                {item.time}
                            </span>
                            <h3 className="text-lg font-semibold uppercase mb-[10px] ">
                                {item.place}{" "}
                                <span className="opacity-80 text-[15px] pl-[26px] text-thirdly relative before:absolute before:bg-text2 before:top-[9px] before:left-[7px] before:h-[2px] before:w-[10px] before:opacity-80">
                                    {item.edu}
                                </span>{" "}
                            </h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div></div>
            </div>
        </>
    );
};

export default Resume;
