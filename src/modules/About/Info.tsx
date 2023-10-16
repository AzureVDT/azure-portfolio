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
            <div className="relative rounded-lg">
                <Image
                    src={"/about-image.png"}
                    alt=""
                    width={400}
                    height={300}
                    className="object-cover rounded-lg"
                ></Image>
            </div>
            <div className="flex flex-col flex-1 gap-5">
                <h3 className="text-3xl font-semibold text-primary">
                    PERSONAL INFORMATION
                </h3>
                <ul className="grid grid-cols-2 text-lg gap-y-5 text-graySoft">
                    <li>
                        <span className="text-secondary">First Name: </span>
                        {info.firstName}
                    </li>
                    <li>
                        <span className="text-secondary">Last Name: </span>
                        {info.lastName}
                    </li>
                    <li>
                        <span className="text-secondary">Date of birth: </span>
                        {info.birthday}
                    </li>
                    <li>
                        <span className="text-secondary">Sex: </span>
                        {info.sex}
                    </li>
                    <li>
                        <span className="text-secondary">National: </span>
                        {info.nation}
                    </li>
                    <li>
                        <span className="text-secondary">Address: </span>
                        {info.address}
                    </li>
                    <li>
                        <span className="text-secondary">Phone: </span>
                        {info.phone}
                    </li>
                    <li>
                        <span className="text-secondary">Facebook: </span>
                        {info.facebook}
                    </li>
                    <li>
                        <span className="text-secondary">Language: </span>
                        {info.language}
                    </li>
                    <li>
                        <span className="text-secondary">Email address: </span>
                        {info.email}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
