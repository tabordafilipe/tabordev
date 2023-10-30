import Background from "@/components/Background/Background";
import INFO from "@/assets/configs/info.json";
import SECTIONS from "@/assets/configs/sections.json";
import { Info } from "@/models/info.model";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import styles from "./Home.module.scss";
import MyInfo from "@/components/MyInfo/MyInfo";
import About from "@/components/About/About";
import Section from "@/components/Section/Section";
import { useContext, useState } from "react";
import { IsLogoVisibleContext } from "@/hooks/IsVisible";
import { Sections } from "@/models/section.model";
import { useIsMobile } from "@/hooks/IsMobile";

const info = INFO as Info;
const { about } = SECTIONS as Sections;

export default function Home() {
  const isMobile = useIsMobile();

  const { isLogoVisible } = useContext(IsLogoVisibleContext);
  const [, setIsLogoVisible] = useState(false);

  const onLogoVisible = (visible: boolean) => {
    setIsLogoVisible(visible);
  };

  return (
    <main className="font-mono">
      <Background />
      {!isMobile && (
        <div className={styles.Home__ThemeSwitcher}>
          <ThemeSwitcher />
        </div>
      )}
      <section className="h-screen w-screen">
        <MyInfo info={info} onLogoVisible={onLogoVisible} />
        <div className={styles.Home__MouseScrollContent}>
          <div
            className={`mouse dark:border-white-50 dark:before:bg-white-50 transition-opacity ease-in duration-700 ${
              isLogoVisible ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </section>

      <section id={about.id} className="w-screen py-28">
        <Section name={about.name}>
          <About info={info} />
        </Section>
      </section>
    </main>
  );
}
