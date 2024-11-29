import React, { useState } from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icon";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 3000));

        try {
            const response = await fetch(endpoint, options);
            const resData = await response.json();

            if (response.status === 200) {
                toast.success("Email sent successfully!");
                setEmailSubmitted(true);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        loading: {
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        },
        tap: { scale: 0.98 }
    };

    return (
        <section id="contact">
            <h1 className="primaryTitle mt-[85px]">Contact</h1>
            <div className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12">
                <div className="z-10">
                    <h5 className="my-2 text-3xl font-bold text-thirdly">
                        Let&apos;s Connect
                    </h5>
                    <p className="max-w-md mb-4">
                        {" "}
                        I&apos;m currently looking for new opportunities, my
                        inbox is always open. Whether you have a question or
                        just want to say hi, I&apos;ll try my best to get back
                        to you!
                    </p>
                    <div className="flex flex-row gap-2">
                        <Link href="https://github.com/AzureVDT">
                            <GithubIcon></GithubIcon>
                        </Link>
                        <Link href="https://www.linkedin.com/in/thong-dinh-878838250/">
                            <LinkedinIcon></LinkedinIcon>
                        </Link>
                    </div>
                </div>
                <div>
                    {emailSubmitted ? (
                        <p className="mt-2 text-sm text-thirdly">
                            Email sent successfully!
                        </p>
                    ) : (
                        <form
                            className="flex flex-col"
                            onSubmit={handleSubmit}
                            autoComplete="off"
                        >
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-base font-medium cursor-pointer text-thirdly"
                                >
                                    Your email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    className="dark:bg-darkStrock dark:placeholder-text4 dark:border-none border border-text4 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="azuredev@gmail.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-base font-medium cursor-pointer text-thirdly"
                                >
                                    Subject
                                </label>
                                <input
                                    name="subject"
                                    type="text"
                                    id="subject"
                                    required
                                    className="dark:bg-darkStrock dark:placeholder-text4 dark:border-none border border-text4 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Just saying hi"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-base font-medium cursor-pointer text-thirdly"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="dark:bg-darkStrock dark:placeholder-text4 dark:border-none border border-text4 text-sm rounded-lg block w-full h-[200px] p-2.5"
                                    placeholder="Let's talk about..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                variants={buttonVariants}
                                initial="initial"
                                animate={isLoading ? "loading" : "initial"}
                                whileTap="tap"
                                className="dark:bg-primary bg-thirdly hover:bg-primary dark:hover:bg-thirdly text-white font-medium py-2.5 px-5 rounded-lg w-full relative"
                            >
                                {isLoading ? (
                                    <>
                                        <span className="opacity-0">Send Message</span>
                                        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </motion.button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
