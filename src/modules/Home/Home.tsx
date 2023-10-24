import Image from "next/image";
import Background from "@/components/Background/Background";
import info from "@/assets/configs/info.json";
import { Info } from "@/models/info.model";
import Icon from "@/components/Icon/Icon";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { useDarkMode } from "usehooks-ts";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";

const MY_INFO = info as Info;

export default function Home() {
  const { isDarkMode } = useDarkMode();
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    setLogoSrc(`/logos/tabordev-logo${isDarkMode ? "-dark" : ""}.png`);
  }, [isDarkMode]);

  return (
    <main>
      <Background />
      <div className={styles.ThemeSwitcher}>
        <ThemeSwitcher />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between">
        {logoSrc && (
          <Image
            className="px-5"
            src={logoSrc}
            alt="Logo"
            width={600}
            height={600}
          />
        )}

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
