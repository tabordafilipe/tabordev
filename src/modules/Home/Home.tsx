import { useContext, useState } from "react";

import About from "@/components/About/About";
import Background from "@/components/Background/Background";
import ContactMe from "@/components/ContactMe/ContactMe";
import INFO from "@/assets/configs/info.json";
import { Info } from "@/models/info.model";
import { IsLogoVisibleContext } from "@/hooks/IsVisible";
import MyInfo from "@/components/MyInfo/MyInfo";
import SECTIONS from "@/assets/configs/sections.json";
import Section from "@/components/Section/Section";
import { Sections } from "@/models/section.model";
import Skills from "@/components/Skills/Skills";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Timeline from "@/components/Timeline/Timeline";
import styles from "./Home.module.scss";
import { useIsMobile } from "@/hooks/IsMobile";

const info = INFO as Info;
const { about, skills, timeline, contactme } = SECTIONS as Sections;

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

      {/* INFO section */}
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

      {/* ABOUT section */}
      <Section id={about.id} name={about.name}>
        <About info={info} />
      </Section>

      {/* SKILLS section */}
      <Section id={skills.id} name={skills.name}>
        <Skills />
      </Section>

      {/* TIMELINE section */}
      <Section id={timeline.id} name={timeline.name}>
        <Timeline />
      </Section>

      {/* CONTACT ME section */}
      <Section id={contactme.id} name={contactme.name} className={styles.Home__Section__ContactMe}>
        <ContactMe />
      </Section>
    </main>
  );
}
