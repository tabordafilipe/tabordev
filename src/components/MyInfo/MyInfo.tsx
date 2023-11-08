import { IsLogoVisibleContext, useIsVisible } from "@/hooks/IsVisible";
import { useContext, useEffect, useRef, useState } from "react";

import Icon from "../Icon/Icon";
import { Info } from "@/models/info.model";
import Logo from "../Logo/Logo";
import { TypeAnimation } from "react-type-animation";

interface MyInfoProps {
  info: Info;
  onLogoVisible: (visibe: boolean) => void;
}

export default function MyInfo({ info, onLogoVisible }: MyInfoProps) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  const { setIsLogoVisible } = useContext(IsLogoVisibleContext);

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
