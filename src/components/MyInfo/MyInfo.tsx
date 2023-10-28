import { Info } from "@/models/info.model";
import { useState, useEffect, useRef, useContext } from "react";
import { useDarkMode } from "usehooks-ts";
import Icon from "../Icon/Icon";
import { IsLogoVisibleContext, useIsVisible } from "@/hooks/IsVisible";
import { TypeAnimation } from "react-type-animation";
import Logo from "../Logo/Logo";

interface MyInfoProps {
  info: Info;
  onLogoVisible: (visibe: boolean) => void;
}

export default function MyInfo({ info, onLogoVisible }: MyInfoProps) {
  const { isDarkMode } = useDarkMode();
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  const { setIsLogoVisible } = useContext(IsLogoVisibleContext);

  useEffect(() => {
    setLogoSrc(`/logos/tabordev-logo${isDarkMode ? "-dark" : ""}.png`);
  }, [isDarkMode, isVisible, onLogoVisible]);

  useEffect(() => {
    onLogoVisible(isVisible);
    setIsLogoVisible(isVisible);
  }, [onLogoVisible, isVisible, setIsLogoVisible]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-5 px-5 md:px-15 select-none">
      <div ref={ref}>
        <Logo alt="Logo info" width={500} height={500} />
      </div>

      <div className="text-lg text-center">
        <TypeAnimation
          sequence={info.descriptionSequence}
          speed={50}
          repeat={Infinity}
        />
      </div>

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
