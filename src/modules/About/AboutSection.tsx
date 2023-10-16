import React from "react";
import Info from "./Info";
import Skills from "./Skill";
import Resume from "./Resume";

const AboutSection = () => {
    return (
        <div id="about">
            <h1
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-thirdly 
            text-[50px] p-10 text-center w-full h-full mb-[85px]"
            >
                ABOUT ME
            </h1>
            <Info></Info>
            <Skills></Skills>
            <Resume></Resume>
        </div>
    );
};

export default AboutSection;
