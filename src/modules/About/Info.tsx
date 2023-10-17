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
        <div className="flex items-center justify-between gap-x-[100px] shadow-md mb-[125px]">
            <div className="relative rounded-lg" data-aos="fade-up-left">
                <Image
                    src={"/about-image.png"}
                    alt=""
                    width={400}
                    height={300}
                    className="object-cover rounded-lg"
                ></Image>
            </div>
            <div
                className="flex flex-col flex-1 gap-5"
                data-aos="fade-up-right"
            >
                <h3 className="text-3xl font-semibold text-thirdly">
                    PERSONAL INFORMATION
                </h3>
                <ul className="grid grid-cols-2 text-lg gap-y-5 text-graySoft">
                    <li>
                        <span className="text-primary">First Name: </span>
                        {info.firstName}
                    </li>
                    <li>
                        <span className="text-primary">Last Name: </span>
                        {info.lastName}
                    </li>
                    <li>
                        <span className="text-primary">Date of birth: </span>
                        {info.birthday}
                    </li>
                    <li>
                        <span className="text-primary">Sex: </span>
                        {info.sex}
                    </li>
                    <li>
                        <span className="text-primary">National: </span>
                        {info.nation}
                    </li>
                    <li>
                        <span className="text-primary">Address: </span>
                        {info.address}
                    </li>
                    <li>
                        <span className="text-primary">Phone: </span>
                        {info.phone}
                    </li>
                    <li>
                        <span className="text-primary">Facebook: </span>
                        {info.facebook}
                    </li>
                    <li>
                        <span className="text-primary">Language: </span>
                        {info.language}
                    </li>
                    <li>
                        <span className="text-primary">Email address: </span>
                        {info.email}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
