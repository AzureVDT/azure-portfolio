import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import useDarkMode from "@/hooks/useDarkMode";

const DarkModeIcon = dynamic(() => import("./icon/DarkModeIcon"), {
    ssr: false,
});
const LightModeIcon = dynamic(() => import("./icon/LightModeIcon"), {
    ssr: false,
});

const DarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const handleToggleDarkMode = () => {
        if (typeof setDarkMode === "function") {
            setDarkMode(!darkMode);
        }
    };

    return (
        <>
            <span
                className="cursor-pointer select-none dark:hover:bg-[#ffb400] hover:bg-thirdly bg-darkSecondary dark:bg-darkStrock w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all"
                onClick={handleToggleDarkMode}
            >
                <motion.div
                    whileHover={{ rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 1 }}
                >
                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </motion.div>
            </span>
        </>
    );
};

export default DarkMode;