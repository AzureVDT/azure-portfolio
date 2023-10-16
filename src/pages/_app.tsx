import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { Poppins } from "next/font/google";
import Meta from "@/components/Meta";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <div className={poppins.className}>
                <Meta></Meta>
                <Component {...pageProps} />
            </div>
        </QueryClientProvider>
    );
}
