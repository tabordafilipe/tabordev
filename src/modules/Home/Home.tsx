import Image from "next/image";
import Background from "@/components/Background/Background";
import info from "@/assets/configs/info.json";
import { Info } from "@/models/info.model";
import useThemeDetector from "@/hooks/ThemeDetector";
import Icon from "@/components/Icon/Icon";

const MY_INFO = info as Info;

export default function Home() {
  const isDarkTheme = useThemeDetector();

  return (
    <main>
      <Background />
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Image
          className="px-5"
          src={`/logos/tabordev-logo${isDarkTheme ? "-dark" : ""}.png`}
          alt="Logo"
          width={600}
          height={600}
        />

        <div className="flex space-x-10">
          {MY_INFO.icons.map((icon) => (
            <Icon
              key={icon.name}
              href={icon.href}
              name={icon.name}
              title={icon.title}
              dimensions={{
                width: 50,
                height: 50,
              }}
            />
          ))}
        </div>

        <span className="font-mono text-base pb-20">coming soon ...</span>
      </div>
    </main>
  );
}
