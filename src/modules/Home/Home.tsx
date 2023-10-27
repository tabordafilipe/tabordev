import Background from "@/components/Background/Background";
import info from "@/assets/configs/info.json";
import { Info } from "@/models/info.model";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import styles from "./Home.module.scss";
import LogoLinks from "@/components/LogoLinks/LogoLinks";
import About from "@/components/About/About";
import Section from "@/components/Section/Section";

const MY_INFO = info as Info;

export default function Home() {
  return (
    <main className="font-mono">
      <Background />
      <div className={styles.Home__ThemeSwitcher}>
        <ThemeSwitcher />
      </div>
      <section className="h-screen w-screen">
        <LogoLinks info={MY_INFO} />
        <div className={styles.Home__MouseScrollContent}>
          <div className="mouse dark:border-white-50 dark:before:bg-white-50"></div>
        </div>
      </section>
      <section className="w-screen pt-20">
        <Section name="about .">
          <About info={MY_INFO} />
        </Section>
      </section>
    </main>
  );
}
