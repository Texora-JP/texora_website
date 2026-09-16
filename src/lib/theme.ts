export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "texora-theme";

/** Fired on the window whenever the theme changes in this tab. */
const THEME_EVENT = "texora:themechange";

/**
 * The document element is the source of truth — the pre-paint script in
 * ThemeScript sets it before React ever runs, so components read from it
 * rather than keeping a second copy of the same state.
 */
export function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function getServerTheme(): Theme {
  return "light";
}

export function subscribeToTheme(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function applyTheme(next: Theme) {
  // `color-scheme` comes from the :root / .dark rules in globals.css, so
  // toggling the class is all that is needed here.
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Private mode or blocked storage: the theme still applies for this visit.
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}
