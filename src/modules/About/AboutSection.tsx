import React from "react";
import Info from "./Info";
import Skills from "./Skill";
import Resume from "./Resume";

const AboutSection = () => {
    return (
        <div id="about">
            <h1 className="primaryTitle mt-[85px]">ABOUT ME</h1>
            <Info></Info>
            <Skills></Skills>
            <Resume></Resume>
        </div>
    );
};

export default AboutSection;
