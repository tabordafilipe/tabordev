import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
        className="px-5"
        src="/tabordev-logo.png"
        alt="Logo"
        width={600}
        height={600}
      />

      <span className="font-mono text-base pb-20">coming soon ...</span>
    </main>
  );
}
