import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'tokyo_darker': "#565f89",
                'tokyogreen': '#9ece6a',
                'blue': '#89b4fa',
                'mocha_red': '#f38ba8',
                'crust': '#16161e',
                'mocha_lavender': '#b4befe',
                'mocha_yellow': '#f9e2af',
                'crustlight': '#d6d8df',
                'base': '#1a1b26',
                'baselight': '#eff1f5',
            },
        },
    },
    plugins: [],
};
export default config;
