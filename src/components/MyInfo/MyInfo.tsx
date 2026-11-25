import { IsLogoVisibleContext, useIsVisible } from "@/hooks/IsVisible";
import { useContext, useEffect, useRef } from "react";

import Icon from "../Icon/Icon";
import Image from "next/image";
import { Info } from "@/models/info.model";
import Link from "next/link";
import SECTIONS from "@/assets/configs/sections.json";
import { Sections } from "@/models/section.model";
import styles from "./MyInfo.module.scss";
import { useDarkMode } from "@/hooks/DarkMode";

const { timeline, curriculum } = SECTIONS as Sections;

interface MyInfoProps {
  info: Info;
  onLogoVisible: (visibe: boolean) => void;
}

export default function MyInfo({ info, onLogoVisible }: MyInfoProps) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  const { setIsLogoVisible } = useContext(IsLogoVisibleContext);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    onLogoVisible(isVisible);
    setIsLogoVisible(isVisible);
  }, [onLogoVisible, isVisible, setIsLogoVisible]);

  const buttonClassName = `${styles.MyInfo__Button} px-6 py-3 rounded-full border border-current text-base`;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-5 md:px-15">
      <div className="flex flex-col items-center text-center space-y-6 w-full max-w-3xl">
        <div ref={ref} className={styles.MyInfo__Item}>
          <Image
            src={`/logos/tabordev-logo-small${isDarkMode ? "-dark" : ""}.png`}
            alt="Logo"
            width={140}
            height={148}
            priority
          />
        </div>

        <h1
          className={`${styles.MyInfo__Item} ${styles.MyInfo__Name} text-3xl md:text-5xl font-bold`}
        >
          {info.name}
        </h1>

        <p
          className={`${styles.MyInfo__Item} text-sm uppercase tracking-widest opacity-75`}
        >
          {info.location}
        </p>

        <p className={`${styles.MyInfo__Item} text-xl md:text-3xl`}>
          {info.role}
        </p>

        <p className={`${styles.MyInfo__Item} max-w-full text-base md:text-lg`}>
          <span
            className={styles.MyInfo__Typewriter}
            style={{ "--chars": info.tagline.length } as React.CSSProperties}
          >
            {info.tagline}
          </span>
        </p>

        <div
          className={`${styles.MyInfo__Item} flex flex-wrap justify-center gap-4 pt-4`}
        >
          <a className={buttonClassName} href={timeline.href}>
            View experience
          </a>
          <Link className={buttonClassName} href={curriculum.href}>
            Download CV
          </Link>
        </div>

        <div className={`${styles.MyInfo__Item} flex flex-wrap justify-center gap-6 pt-6`}>
          {info.icons.map((icon) => (
            <Icon
              key={icon.name}
              href={icon.href}
              name={icon.name}
              title={icon.title}
              dimensions={{
                width: 25,
                height: 25,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
