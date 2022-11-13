/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        fontFamily: {
            sans: [  "Vazirmatn" ,"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        },
        transitionDuration: {
            DEFAULT: "300ms",
        },
        extend: {},
    },
    plugins: [],
};
