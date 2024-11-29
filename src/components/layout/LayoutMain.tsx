import React from "react";
import { ScrollerMotion } from "scroller-motion";
interface ILayoutMainProps {
    children?: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMainProps) => {
    return <ScrollerMotion><div className="w-full max-w-[1440px] mx-auto p-5">{children}</div></ScrollerMotion>;
};

export default LayoutMain;
