import { useEffect, useState } from "react";
import { useDarkMode } from "usehooks-ts";
import Icon from "../Icon/Icon";

export default function ThemeSwitcher() {
  const { isDarkMode, toggle } = useDarkMode();
  const [iconName, setIconName] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(isDarkMode ? "dark" : "light");

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
          width: 35,
          height: 35,
        }}
        onClick={handleThemeChange}
      />
    )
  );
}
