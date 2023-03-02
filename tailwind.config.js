/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                "8xl": "90rem",
            },
            colors: {
                primary: "blue-700",
                "gray-850": "#28384E",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            gridTemplateColumns: {
                fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
            },
            // typography: (theme) => ({
            //     DEFAULT: {
            //         css: {
            //             "--tw-prose-pre-code": theme("colors.gray[200]"),
            //         },
            //     },
            // }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
