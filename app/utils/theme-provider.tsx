// /app/utils/theme-provider.tsx

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}
const themes: Array<Theme> = Object.values(Theme);

type ThemeContextType = [Theme, Dispatch<SetStateAction<Theme>>];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const prefersLightMQ = "(prefers-color-scheme: light)";
const getPreferredTheme = () =>
  window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK;

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    return storedTheme && themes.includes(storedTheme)
      ? storedTheme
      : getPreferredTheme();
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.LIGHT : Theme.DARK);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

function NonFlashOfWrongThemeEls({ ssrTheme }: { ssrTheme: boolean }) {
  const [theme] = useTheme();

  const clientThemeCode = `
    (function() {
      const storedTheme = localStorage.getItem("theme");
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      const theme = storedTheme || (prefersLight ? "light" : "dark");
      document.documentElement.className = theme;
    })();
  `;

  return (
    <>
      <meta
        name="color-scheme"
        content={theme === "light" ? "light dark" : "dark light"}
      />
      {!ssrTheme && (
        <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />
      )}
    </>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Make sure everything is exported correctly
export { Theme, ThemeProvider, useTheme, NonFlashOfWrongThemeEls };
