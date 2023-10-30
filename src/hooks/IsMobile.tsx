import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const match = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsMobile(!match);
  }, [match]);

  return isMobile;
}
