import { useEffect, useRef } from "react";

import styles from "./Background.module.scss";
import { useDarkMode } from "@/hooks/DarkMode";

export default function Background() {
  const { isDarkMode } = useDarkMode();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const hasFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!element || !hasFinePointer) return;

    const onPointerMove = (event: PointerEvent) => {
      element.style.setProperty("--mouse-x", `${event.clientX}px`);
      element.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`${styles.Background} ${
        styles[`Background--${isDarkMode ? "dark" : "light"}`]
      }`}
    >
      <span className={`${styles.Background__Blob} ${styles.Background__Blob_1}`} />
      <span className={`${styles.Background__Blob} ${styles.Background__Blob_2}`} />
      <span className={`${styles.Background__Blob} ${styles.Background__Blob_3}`} />
      <div className={styles.Background__Grid} />
      <div className={styles.Background__Spotlight} />
    </div>
  );
}
