import { useState, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import Image from "next/image";

interface LogoProps {
  alt: string;
  width: number;
  height: number;
  small?: boolean;
}

export default function Logo({ alt, width, height, small }: LogoProps) {
  const { isDarkMode } = useDarkMode();
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    setLogoSrc(`/logos/tabordev-logo${small ? "-small" : ""}${isDarkMode ? "-dark" : ""}.png`);
  }, [isDarkMode, small]);

  return (
    logoSrc && <Image src={logoSrc} alt={alt} width={width} height={height} />
  );
}
