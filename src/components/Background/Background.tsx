"use client";

import Particles from "react-particles";
import particlesOptions from "@/assets/configs/particles/particles.json";
import particlesOptionsDark from "@/assets/configs/particles/particles-dark.json";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import styles from "./Background.module.scss";
import { useDarkMode } from "usehooks-ts";
import { useEffect, useState } from "react";

export default function Background() {
  const [options, setOptions] = useState(particlesOptions as ISourceOptions);
  const [className, setClassName] = useState("");
  const { isDarkMode } = useDarkMode();

  const particlesInit = async (main: Engine) => await loadFull(main);

  useEffect(() => {
    setOptions(
      (isDarkMode ? particlesOptionsDark : particlesOptions) as ISourceOptions
    );
    setClassName(
      `${styles.Background} ${
        styles[`Background--${isDarkMode ? "dark" : "light"}`]
      }`
    );
  }, [isDarkMode]);

  return (
    <>
      <div className={className}></div>
      <Particles
        className={styles.Background}
        init={particlesInit}
        options={options}
      />
    </>
  );
}
