"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
                >
                    <h1 className="mb-4 text-4xl font-extrabold text-whiteSoft sm:text-5xl lg:text-8xl lg:leading-normal">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-thirdly">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "AzureVDT",
                                1000,
                                "Web Developer",
                                1000,
                                "Mobile Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="mb-6 text-base text-text4 sm:text-lg lg:text-xl">
                        I&apos;m a Front-end developer with experience in React
                        Native, ReactJS and Next. I enjoy building responsive UI
                        components and integrating APIs.
                    </p>
                    <div>
                        <Link
                            href="#contact"
                            className="inline-block w-full px-6 py-3 mr-4 rounded-full text-whiteSoft sm:w-fit bg-gradient-to-br from-primary to-secondary"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/"
                            className="inline-block w-full px-1 py-1 mt-3 rounded-full text-whiteSoft sm:w-fit bg-gradient-to-br from-primary to-secondary"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 mt-4 place-self-center lg:mt-0"
                >
                    <div className="relative w-full h-full rounded-lg">
                        <Image
                            src="/hero-image.jpg"
                            alt="hero image"
                            className="rounded-lg h-[550px] object-cover"
                            width={400}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
