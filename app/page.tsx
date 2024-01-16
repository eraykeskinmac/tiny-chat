import Code from "@/components/Code";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex items-center justify-center flex-col gap-6">
      <h1 className="text-4xl font-black">Code Share</h1>
      <Code placeholder="Paster some code here..." />
    </main>
  );
}
