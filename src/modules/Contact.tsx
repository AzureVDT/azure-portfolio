import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
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
                    <div className="flex flex-row gap-2 socials">
                        <Link href="https://github.com/AzureVDT">
                            <Image
                                src={"/github-icon.svg"}
                                alt="Github Icon"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/thong-dinh-878838250/">
                            <Image
                                src={"/linkedin-icon.svg"}
                                alt="Linkedin Icon"
                                width={40}
                                height={40}
                            />
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
                            <button
                                type="submit"
                                className="dark:bg-primary bg-thirdly hover:bg-primary dark:hover:bg-thirdly text-white font-medium py-2.5 px-5 rounded-lg w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
