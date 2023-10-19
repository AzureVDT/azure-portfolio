import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="flex items-center justify-between px-3 py-5 shadow-xl bg-thirdly">
            <Link
                className="flex items-center justify-center gap-x-5"
                href={"/"}
            >
                <div className="relative rounded-lg">
                    <Image
                        src={"/Logo.jpg"}
                        alt=""
                        width={40}
                        height={40}
                        priority
                        className="object-cover rounded-lg"
                    ></Image>
                </div>
                <span className="text-lg font-semibold">AzureVDT</span>
            </Link>
            <p className="text-text2">All rights reserved.</p>
        </footer>
    );
};

export default Footer;
