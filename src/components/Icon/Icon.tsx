import Image from "next/image";
import styles from "./Icon.module.scss";
import useThemeDetector from "@/hooks/ThemeDetector";
import { useEffect, useRef } from "react";

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  href: string;
  name: string;
  title: string;
  dimensions: {
    width: number;
    height: number;
  };
}

const replaceColor = (svgString: string, newColor: string) => {
  const regex = /fill="#[A-Fa-f0-9]{6}"/g;
  const replacement = `fill="var(${newColor})"`;
  return svgString.replace(regex, replacement);
};

export default function Icon(props: IconProps) {
  const isDarkTheme = useThemeDetector();

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgElement = async () =>
      await import(`../../../public/icons/${props.name}.svg`);

    svgElement().catch((e) => {
      console.error("<strong>On loading the SVG</strong>", e);
    });

    svgElement().then((svg) => {
      svgRef!.current!.innerHTML = replaceColor(
        svg.default,
        isDarkTheme ? "black" : "white"
      );
    });
  }, [props.name, isDarkTheme]);

  return (
    <a
      className={styles.Icon}
      href={props.href}
      target="_blank"
      title={props.title}
    >
      <svg
        width={props.dimensions.width}
        height={props.dimensions.height}
        ref={svgRef}
        {...props}
      ></svg>
    </a>
  );
}
