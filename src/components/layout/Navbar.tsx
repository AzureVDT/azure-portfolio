import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import DarkMode from "../DarkMode";

const navLinks = [
    {
        title: "About",
        path: "about",
    },
    {
        title: "Projects",
        path: "projects",
    },
    {
        title: "Contact",
        path: "contact",
    },
];

const Navbar = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-3 shadow-xl z-[9999] dark:bg-darkSoft bg-graySoft">
            <Link
                className="flex items-center justify-center gap-x-5"
                href={"/"}
            >
                <div className="relative rounded-lg">
                    <Image
                        src={"/Logo.jpg"}
                        alt="AzureVDT"
                        width={40}
                        height={40}
                        priority
                        className="object-cover rounded-lg"
                    ></Image>
                </div>
                <span className="text-lg font-semibold">AzureVDT</span>
            </Link>
            <DarkMode />
            <div className="flex items-center justify-center">
                {navLinks.map((link) => (
                    <motion.button
                        key={link.title}
                        onClick={() => handleScroll(link.path)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-5 py-2 text-lg font-semibold transition-all rounded-lg hover:text-thirdly"
                    >
                        {link.title}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default Navbar;