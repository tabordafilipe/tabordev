import Image from "next/image";
import GmailIcon from "@/assets/images/gmail.svg";
import styles from "./home.module.scss";
import Background from "@/components/Background/Background";
import ClickableImage from "@/components/ClickableImage/ClickableImage";
import info from "@/assets/configs/info.json";
import { Info } from "@/models/info.model";

const myInfo = info as Info;

export default function Home() {
  return (
    <main>
      <Background />
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Image
          className="px-5"
          src="/tabordev-logo.png"
          alt="Logo"
          width={600}
          height={600}
        />

        <div className="flex space-x-10">
          {myInfo.clickableImages.map((clickableImage) => (
            <ClickableImage
              key={clickableImage.alt}
              href={clickableImage.href}
              imgProps={{
                src: clickableImage.src,
                width: 50,
                height: 50,
                alt: clickableImage.alt,
                title: clickableImage.title,
              }}
            />
          ))}
        </div>

        <span className="font-mono text-base pb-20">coming soon ...</span>
      </div>
    </main>
  );
}
