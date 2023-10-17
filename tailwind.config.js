/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                grayf1: "#F1F1F3",
                primary: "#6F49FD",
                secondary: "#A4D96C",
                thirdly: "#1DC071",
                primaryText: "#11142d",
                text1: "#171725",
                text2: "#4B5264",
                text3: "#808191",
                text4: "#B2B3BD",
                text5: "#171725",
                iconColor: "#A2A2A8",
                white: "#FFFFFF",
                whiteSoft: "#FCFBFF",
                graySoft: "#FCFCFC",
                grayf3: "#f3f3f3",
                strock: "#F1F1F3",
                lite: "#FCFCFD",
                error: "#EB5757",
                darkBG: "#13131A",
                darkSecondary: "#1C1C24",
                softDark: "#22222C",
                darkSoft: "#24242C",
                darkStrock: "#3A3A43",
                darkRed: "#422C32",
            },
        },
    },
    plugins: [],
};
