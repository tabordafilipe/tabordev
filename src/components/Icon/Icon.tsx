import styles from "./Icon.module.scss";
import { useEffect, useRef } from "react";
import { useDarkMode } from "usehooks-ts";

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  href?: string;
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
  const { isDarkMode } = useDarkMode();

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
        isDarkMode ? "black" : "white"
      );
    });
  }, [props.name, isDarkMode]);

  const svg = (
    <svg
      className={styles.Icon}
      width={props.dimensions.width}
      height={props.dimensions.height}
      ref={svgRef}
      onClick={props.onClick}
      {...props}
    />
  );

  return props.href ? (
    <a href={props.href} target="_blank" title={props.title}>
      {svg}
    </a>
  ) : (
    svg
  );
}
