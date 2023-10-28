import { useState, useEffect, useContext } from "react";
import { useDarkMode } from "usehooks-ts";
import styles from "./Header.module.scss";
import { IsLogoVisibleContext } from "@/hooks/IsVisible";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SECTIONS from "@/assets/configs/sections.json";
import { Sections } from "@/models/section.model";
import Logo from "../Logo/Logo";

const sections = SECTIONS as Sections;

export default function Header() {
  const { isDarkMode } = useDarkMode();

  const { isLogoVisible } = useContext(IsLogoVisibleContext);
  const isHeaderLogoVisible = isLogoVisible === false;

  const [linkClassName, setLinkClassName] = useState("");

  useEffect(() => {
    setLinkClassName(
      `${styles.Header__Links__Link} ${styles.Header__Links__Link_Effect} ${
        isDarkMode ? styles["Header__Links__Link_Effect--dark"] : ""
      }`
    );
  }, [isDarkMode]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const link = (name: string, href: string) => (
    <a className={linkClassName} href={href}>
      {name}
    </a>
  );

  const links = Object.entries(sections).map(([, section]) => (
    <li key={section.id}>{link(section.name, section.href)}</li>
  ));

  return (
    <header
      className={`fixed py-10 ${styles.Header} ${
        isHeaderLogoVisible && styles["Header--visible"]
      }`}
    >
      <nav className="w-screen h-16">
        <div className="container h-full m-auto flex flex-row justify-between items-center align-center">
          <div className="px-10">
            <div
              className={`cursor-pointer select-none
                ${
                  !isHeaderLogoVisible
                    ? styles.Header__Logo
                    : styles["Header__Logo--visible"]
                }`}
              onClick={scrollTop}
            >
              <Logo alt="Logo header" width={200} height={200} />
            </div>
          </div>
          <ul className="px-10 space-x-10 flex flex-row">
            {links}
            <li className="flex items-center">
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
