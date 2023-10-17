import React from "react";

interface ILayoutMainProps {
    children?: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMainProps) => {
    return <div className="w-full max-w-[1440px] mx-auto p-5">{children}</div>;
};

export default LayoutMain;
