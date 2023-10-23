"use client";

import Particles from "react-particles";
import particlesOptions from "@/assets/configs/particles/particles.json";
import particlesOptionsDark from "@/assets/configs/particles/particles-dark.json";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import styles from "./Background.module.scss";
import useThemeDetector from "@/hooks/ThemeDetector";

export default function Background() {
  const isDarkTheme = useThemeDetector();

  const particlesInit = async (main: Engine) => await loadFull(main);
  const options = (
    isDarkTheme ? particlesOptionsDark : particlesOptions
  ) as ISourceOptions;

  return (
    <Particles
      className={styles.Background}
      init={particlesInit}
      options={options}
    />
  );
}
