import { useEffect, useState } from "react";
import { useDarkMode } from "@/hooks/DarkMode";
import Icon from "../Icon/Icon";

export default function ThemeSwitcher() {
  const { isDarkMode, toggle } = useDarkMode();
  const [iconName, setIconName] = useState<string | null>(null);

  useEffect(() => {
    setIconName(isDarkMode ? "sun" : "moon");
  }, [isDarkMode]);

  const handleThemeChange = () => {
    toggle();
  };

  return (
    iconName && (
      <Icon
        key={iconName}
        name={iconName}
        title="Switch Theme"
        dimensions={{
          width: 25,
          height: 25,
        }}
        onClick={handleThemeChange}
      />
    )
  );
}
