import Image from "next/image";
import React from "react";
const info = {
    firstName: "Vo",
    lastName: "Dinh Thong",
    birthday: "2003/11/17",
    sex: "male",
    nation: "Vietnam",
    address: "HCM, Vietnam",
    phone: "0346549617",
    email: "vodinhthong17112003@gmail.com",
    facebook: "https://www.facebook.com/d.thong12",
    git: "https://github.com/AzureVDT",
    language: "Vietnamese, English",
};
const Info = () => {
    return (
        <div className="flex items-center justify-between gap-x-[100px] mb-[125px]">
            <div className="relative rounded-lg" data-aos="fade-up-left">
                <Image
                    src={"/about-image.png"}
                    alt=""
                    width={400}
                    height={300}
                    className="object-cover rounded-lg"
                    loading="lazy"
                ></Image>
            </div>
            <div
                className="flex flex-col flex-1 gap-5"
                data-aos="fade-up-right"
            >
                <h3 className="text-3xl font-semibold dark:text-thirdly text-text2">
                    PERSONAL INFORMATION
                </h3>
                <ul className="grid grid-cols-2 text-lg gap-y-5 dark:text-graySoft">
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            First Name:{" "}
                        </span>
                        {info.firstName}
                    </li>
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            Last Name:{" "}
                        </span>
                        {info.lastName}
                    </li>
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            Date of birth:{" "}
                        </span>
                        {info.birthday}
                    </li>
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            Sex:{" "}
                        </span>
                        {info.sex}
                    </li>
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            National:{" "}
                        </span>
                        {info.nation}
                    </li>
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            Address:{" "}
                        </span>
                        {info.address}
                    </li>
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            Phone:{" "}
                        </span>
                        {info.phone}
                    </li>
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            Facebook:{" "}
                        </span>
                        {info.facebook}
                    </li>
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            Language:{" "}
                        </span>
                        {info.language}
                    </li>
                    <li>
                        <span className="dark:text-primary text-thirdly">
                            Email address:{" "}
                        </span>
                        {info.email}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
