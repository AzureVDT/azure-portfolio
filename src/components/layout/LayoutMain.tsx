import React from "react";
import Navbar from "./Navbar";

interface ILayoutMainProps {
    children?: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMainProps) => {
    return (
        <div className="w-full max-w-[1440px] mx-auto p-5">
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default LayoutMain;
