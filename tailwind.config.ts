import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend : {
		colors: {
			"primary" : "#7BBCB0",
			"secondary" : "#FFDA32",
			"text-color" : "#1C2B38"
		},
    keyframes: {
      scroll :{
        '0%' : {transform : 'translateX(100%)'},
        '100%' : {transform : 'translateX(0)'}
      }
    },
    animation :{
      "scroll-down" : "scroll 0.4s linear"
    },
    

	}
  },
} satisfies Config;
