import Code from "@/components/Code";
import Settings from "@/components/Settings";

export default function Home() {
  return (
    <main
      className="h-full flex items-center justify-center flex-col gap-6"
      id="main"
    >
      <h1 className="text-4xl font-black">Code Share</h1>
      <Code initialValue="test" />
      <Settings />
    </main>
  );
}
