import React from "react";
const skills = [
    {
        name: "html",
        path: "/skills/html.png",
    },
    {
        name: "css",
        path: "/skills/css.png",
    },
    {
        name: "sass",
        path: "/skills/sass.png",
    },
    {
        name: "javascript",
        path: "/skills/js.png",
    },
    {
        name: "typescript",
        path: "/skills/typescript.png",
    },
    {
        name: "java",
        path: "/skills/java.png",
    },
    {
        name: "bootstrap",
        path: "/skills/bootstrap.png",
    },
    {
        name: "tailwindcss",
        path: "/skills/tailwindcss.webp",
    },
    {
        name: "my sql",
        path: "/skills/sql.png",
    },
    {
        name: "mongodb",
        path: "/skills/mongodb.png",
    },
    {
        name: "responsive",
        path: "/skills/responsive.png",
    },
    {
        name: "react",
        path: "/skills/react.png",
    },
    {
        name: "next",
        path: "/skills/nextjs.png",
    },
    {
        name: "redux",
        path: "/skills/redux.png",
    },
    {
        name: "git",
        path: "/skills/git.png",
    },
    {
        name: "axios",
        path: "/skills/axios.png",
    },
];

const Skills = () => {
    return (
        <div className="mb-[125px]">
            <h3 className="primaryTitle">My Skills</h3>
            <div className="grid grid-cols-4 gap-10 justify-items-center">
                {skills.map((item, i) => (
                    <div
                        className="flex flex-col items-center justify-center w-1/2 lg:w-1/4"
                        key={i}
                        data-aos="fade-up"
                    >
                        <div
                            className="mb-1 flex items-center justify-center w-[120px] h-[120px] bg-text4
                                 rounded-full transition-all duration-300 ease-in-out hover:bg-thirdly"
                        >
                            <div
                                className="bg-center bg-no-repeat bg-cover w-[60%] h-[60%] rounded"
                                style={{
                                    backgroundImage: `url(${item.path})`,
                                }}
                            ></div>
                        </div>
                        <div className="text-sm font-normal uppercase">
                            <h6 className="mt-2">{item.name}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
