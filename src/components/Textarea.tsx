import React, { useState, useRef, useLayoutEffect } from "react";
interface ITextAreaAutoResizeProps {
    placeholder: string;
    className?: string;
    id: string;
}
const TextAreaAutoResize = ({
    placeholder,
    className,
    id,
}: ITextAreaAutoResizeProps) => {
    const [text, setText] = useState<string>("");
    const areaRef = useRef<HTMLTextAreaElement>(null);
    const [textareaHeight, setTextareaHeight] = useState<string>("auto");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaHeight("auto");
        setText(e.target.value);
    };

    useLayoutEffect(() => {
        setTextareaHeight(`${areaRef?.current?.scrollHeight}px`);
    }, [text]);

    return (
        <textarea
            id={id}
            className={`border outline-none border-grayf1 focus:border-thirdly w-full max-w-[400px] p-2 rounded-lg resize-none overflow-hidden transition-all ${className}`}
            placeholder={placeholder}
            ref={areaRef}
            defaultValue={text}
            style={{ height: textareaHeight }}
            onChange={handleChange}
        ></textarea>
    );
};

export default TextAreaAutoResize;
