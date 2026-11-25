import Image from "next/image";
import { useDarkMode } from "@/hooks/DarkMode";

interface LogoProps {
  small?: boolean;
}

export default function Logo({ small }: LogoProps) {
  const { isDarkMode } = useDarkMode();

  return (
    <span className="flex items-center gap-2 font-bold text-xl tracking-tight">
      <Image
        src={`/logos/tabordev-logo-small${isDarkMode ? "-dark" : ""}.png`}
        alt=""
        width={26}
        height={28}
      />
      {small ? "FT" : "F. Taborda"}
    </span>
  );
}
