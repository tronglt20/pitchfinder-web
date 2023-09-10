/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				opensans: ["Open Sans", "sans-serif"],
			},
			screens: {
				xs: "480px",
				ss: "620px",
				sm: "768px",
				md: "1060px",
				lg: "1200px",
				xl: "1700px",
			},
			colors: {
				primary: "#00B14F",
				secondary: "#002e27",
				dark: "#001e20",
			},
		},
	},
	plugins: [],
};
