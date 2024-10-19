import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: 'body',
  theme: {
    extend: {
      colors: {
        primary: '#3D44D7',
        secondary: '#7174C5'
      },
    },
  },
  plugins: [],
};
export default config;
