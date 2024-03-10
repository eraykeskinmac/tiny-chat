import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        firaCode: ["var(--font-fira-code)", ...fontFamily.mono],
        jetBrainsMono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
        inconsolate: ["var(--font-inconsolata)", ...fontFamily.mono],
        // sourceCodePro: ["var(--font-source-code-pro)", ...fontFamily.mono],
        // ibmPlexMono: ["var(--font-ibm-plex-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
export default config;
