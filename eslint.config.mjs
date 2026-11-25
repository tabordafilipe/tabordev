import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  // Existing components set state from effects on mount (SSR-safe theme/media state).
  { rules: { "react-hooks/set-state-in-effect": "warn" } },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
