import { useMediaQuery } from "usehooks-ts";

export function useIsMobile(): boolean {
  const matches = useMediaQuery("(min-width: 768px)");
  const isMobile = !matches;

  return isMobile;
}
