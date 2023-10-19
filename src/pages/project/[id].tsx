import Footer from "@/components/layout/Footer";
import LayoutMain from "@/components/layout/LayoutMain";
import Navbar from "@/components/layout/Navbar";
import ProjectDetails from "@/modules/Project/ProjectDetails";
import React from "react";

const ProjectDetail = () => {
    return (
        <>
            <Navbar type="detail"></Navbar>
            <LayoutMain>
                <ProjectDetails></ProjectDetails>
            </LayoutMain>
            <Footer></Footer>
        </>
    );
};

export default ProjectDetail;
