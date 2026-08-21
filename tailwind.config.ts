import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        blue: "var(--color-blue)",
        navy: "var(--color-navy)",
        orange: "var(--color-orange)",
      },
    },
  },
  plugins: [],
};

export default config;