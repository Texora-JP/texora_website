import { THEME_STORAGE_KEY } from "@/lib/theme";

/**
 * Runs before first paint so the page never flashes the wrong theme.
 * Kept as a raw string because it has to execute ahead of hydration.
 */
const script = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
