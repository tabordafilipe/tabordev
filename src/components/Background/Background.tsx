"use client";

import Particles from "react-particles";
import particlesOptions from "@/assets/configs/particles.json";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import styles from "./Background.module.scss";

export default function Background() {
  const particlesInit = async (main: Engine) => await loadFull(main);
  const options = particlesOptions as ISourceOptions;

  return (
    <Particles
      className={styles.Background}
      init={particlesInit}
      options={options}
    />
  );
}
