import { Info } from "@/models/info.model";
import { useState, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import Icon from "../Icon/Icon";
import Image from "next/image";

export interface LogoLinksProps {
  info: Info;
}

export default function LogoLinks({ info }: LogoLinksProps) {
  const { isDarkMode } = useDarkMode();
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    setLogoSrc(`/logos/tabordev-logo${isDarkMode ? "-dark" : ""}.png`);
  }, [isDarkMode]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-5 px-5 md:px-15">
      {logoSrc && <Image src={logoSrc} alt="Logo" width={500} height={500} />}

      <span className="text-lg text-center">{info.description}</span>

      <div className="flex space-x-10 pt-10">
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
  );
}
