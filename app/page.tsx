import Code from "@/components/Code";
import Settings from "@/components/Settings";
import {
  Fira_Code,
  Inconsolata,
  Inter,
  JetBrains_Mono,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inconssolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

// const sourceCodePro = Source_Code_Pro({
//   subsets: ["latin"],
//   variable: "--font-source-code-pro",
// });

// const ibmPlexMono = IBM_Plex_Mono({
//   weight: ["400"],
//   style: ["normal", "italic"],
//   variable: "--font-ibm-plex-mono",
// });

export default function Home() {
  return (
    <>
      {/*<h1 className="text-4xl font-black">Code Share</h1>*/}
      <Code initialValue="test" />
      <Settings />
    </>
  );
}
