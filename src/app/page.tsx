import Image from 'next/image'

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
              src="/tabordev-logo.png"
              alt="Logo"
              className="dark:invert"
              width={600}
              height={600}
            />
      <Image
              src="/under-construction-bro.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={900}
              height={900}
            />
            <span className="font-mono text-base">coming soon ...</span>
    </main>
  )
}
