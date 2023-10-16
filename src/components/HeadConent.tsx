import { metadata } from "@/config";
import Head from "next/head";
import React from "react";
interface HeadContentProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    keywords?: string;
}
const HeadContent = ({
    title,
    description,
    image,
    url,
    keywords,
}: HeadContentProps) => {
    return (
        <Head>
            <title>{title || metadata.title}</title>
            <meta
                name="description"
                content={description || metadata.description}
            />
            <meta name="keywords" content={keywords || metadata.keywords} />
            <meta property="og:title" content={title || metadata.title} />
            <meta
                property="og:description"
                content={description || metadata.description}
            />
            <meta property="og:url" content={url || metadata.url} />
            <meta property="og:image" content={image || metadata.image} />
            <meta name="twitter:title" content={title || metadata.title} />
            <meta
                name="twitter:description"
                content={description || metadata.description}
            />
            <meta
                name="twitter:image"
                content={image || metadata.description}
            />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default HeadContent;
