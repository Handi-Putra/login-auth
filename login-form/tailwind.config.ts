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
        white: '#ffffff',
        transparent: 'rgba(240, 240, 240, 0.5)',
        black: '#313131',
        yellow: '#f1f1f1',
      },
      backgroundImage: {
        pageBg: "url('/images/code.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
