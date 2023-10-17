import LayoutMain from "@/components/layout/LayoutMain";
import AboutSection from "@/modules/About/AboutSection";
import HeroSection from "@/modules/HeroSection";
import ProjectSection from "@/modules/Project/ProjectSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <LayoutMain>
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <ProjectSection></ProjectSection>
            </LayoutMain>
        </>
    );
}
