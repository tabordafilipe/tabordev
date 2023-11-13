import Drawer, { DrawerAnchor } from "../Drawer/Drawer";
import { useCallback, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Icon from "../Icon/Icon";
import { IsLogoVisibleContext } from "@/hooks/IsVisible";
import Logo from "../Logo/Logo";
import SECTIONS from "@/assets/configs/sections.json";
import { Sections } from "@/models/section.model";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";
import { useDarkMode } from "usehooks-ts";
import { useIsMobile } from "@/hooks/IsMobile";

const sections = SECTIONS as Sections;

export default function Header() {
  const router = useRouter();

  const { isDarkMode } = useDarkMode();
  const isMobile = useIsMobile();

  const pathname = usePathname();

  const { isLogoVisible } = useContext(IsLogoVisibleContext);

  const [isHomePage, setIsHomePage] = useState<boolean>();
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>();

  const [linkClassName, setLinkClassName] = useState("");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = useCallback(() => setIsDrawerOpen(true), []);
  const handleClose = useCallback(() => setIsDrawerOpen(false), []);

  useEffect(() => {
    setLinkClassName(
      `${styles.Header__Links__Link} ${styles.Header__Links__Link_Effect} ${
        isDarkMode ? styles["Header__Links__Link_Effect--dark"] : ""
      }`
    );
  }, [isDarkMode]);

  useEffect(() => {
    setIsHomePage(pathname === "/");
    const isHeaderLogoVisible = isLogoVisible === false;
    setIsHeaderVisible(!isHomePage || isHeaderLogoVisible);
  }, [isHomePage, isLogoVisible, pathname]);

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const logo = isMobile ? (
    <Logo alt="Logo header small" width={40} height={40} small />
  ) : (
    <Logo alt="Logo header" width={200} height={200} />
  );

  const link = (name: string, href: string) => (
    <a className={linkClassName} href={href} onClick={handleClose}>
      {name}
    </a>
  );

  const links = Object.entries(sections).map(([, section]) => (
    <li key={`header_link_${section.id}`}>
      {link(section.name, section.href)}
    </li>
  ));

  return (
    <header
      className={`fixed py-5 md:py-10 ${styles.Header} ${
        isHeaderVisible && styles["Header--visible"]
      }`}
    >
      <nav className="w-screen h-16">
        <div className="container h-full m-auto flex flex-row justify-between items-center align-center">
          <div className="px-5 md:px10">
            <div
              className="cursor-pointer select-none"
              onClick={handleLogoClick}
            >
              {logo}
            </div>
          </div>
          {!isMobile && (
            <ul className="px-10 space-x-10 flex flex-row">
              {links}
              <li className="flex items-center">
                <ThemeSwitcher />
              </li>
            </ul>
          )}
          {isMobile && (
            <div className="px-5">
              <Icon
                name="menu"
                title="Open menu"
                dimensions={{
                  width: 30,
                  height: 30,
                }}
                onClick={handleOpen}
              />
              <Drawer
                anchor={DrawerAnchor.Right}
                open={isDrawerOpen}
                onClose={handleClose}
                headerContent={logo}
              >
                <ul className="p-10 space-y-10 flex flex-col items-center">
                  <li className="mb-5 flex items-center">
                    <ThemeSwitcher />
                  </li>
                  {links}
                </ul>
              </Drawer>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
