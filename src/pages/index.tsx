import Footer from "@/components/layout/Footer";
import LayoutMain from "@/components/layout/LayoutMain";
// import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/modules/About/AboutSection";
import Contact from "@/modules/Contact";
import HeroSection from "@/modules/HeroSection";
import ProjectSection from "@/modules/Project/ProjectSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/layout/Navbar"), {
    ssr: false,
});

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <Navbar></Navbar>
            <LayoutMain>
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <ProjectSection></ProjectSection>
                <Contact></Contact>
            </LayoutMain>
            <Footer></Footer>
        </>
    );
}
