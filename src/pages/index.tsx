import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Modal from "react-modal";
const Navbar = dynamic(() => import("@/components/layout/Navbar"), {
    ssr: false,
});
const LayoutMain = dynamic(() => import("@/components/layout/LayoutMain"), {
    ssr: false,
});
const Footer = dynamic(() => import("@/components/layout/Footer"), {
    ssr: false,
});
const AboutSection = dynamic(() => import("@/modules/About/AboutSection"), {
    ssr: false,
});
const Contact = dynamic(() => import("@/modules/Contact"), {
    ssr: false,
});
const HeroSection = dynamic(() => import("@/modules/HeroSection"), {
    ssr: false,
});
const ProjectSection = dynamic(
    () => import("@/modules/Project/ProjectSection"),
    {
        ssr: true,
    }
);
Modal.setAppElement("#__next");
Modal.defaultStyles = {};

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
