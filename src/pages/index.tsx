import LayoutMain from "@/components/layout/LayoutMain";
import AboutSection from "@/modules/About/AboutSection";
import HeroSection from "@/modules/HeroSection";

export default function Home() {
    return (
        <>
            <LayoutMain>
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
            </LayoutMain>
        </>
    );
}
