import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import styles from "./Drawer.module.scss";
import { useDarkMode } from "usehooks-ts";
import Icon from "../Icon/Icon";

export enum DrawerAnchor {
  Left = "Left",
  Right = "Right",
}

interface DrawerProps {
  open: boolean;
  anchor: DrawerAnchor;
  onClose: () => void;
  headerContent?: ReactNode;
}

export default function Drawer({
  open,
  anchor,
  onClose,
  headerContent,
  children,
}: PropsWithChildren<DrawerProps>) {
  const { isDarkMode } = useDarkMode();
  const anchorClassName = styles[`Drawer_${anchor}`];

  const drawerOpenClassName = "drawer-open";

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add(drawerOpenClassName);
    } else {
      document.documentElement.classList.remove(drawerOpenClassName);
    }
  }, [open]);

  return (
    <>
      <div
        className={`${styles.Drawer__Overlay} 
        ${!open && styles["Drawer__Overlay--hidden"]} 
        ${open && styles["Drawer__Overlay--open"]}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex={-1}
        className={`${styles.Drawer} 
        ${isDarkMode && styles["Drawer--dark"]} 
        ${open && styles["Drawer--animate"]} 
        ${!open && styles["Drawer--hidden"]} 
        ${anchorClassName}`}
      >
        <div className="p-5">
          <div className="h-16 flex flex-row justify-between items-center align-center">
            {headerContent}
            <Icon
              name="close"
              title="Close menu"
              dimensions={{
                width: 30,
                height: 30,
              }}
              onClick={onClose}
            />
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </>
  );
}
