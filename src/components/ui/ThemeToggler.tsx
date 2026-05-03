import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const STORAGE_KEY = "darkTheme";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) return stored === "true";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function ThemeToggler() {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) !== null) return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setDarkTheme(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  function toggleTheme() {
    setDarkTheme((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }

  return (
    <div className="fixed right-0 top-0 z-50 p-[4vmin]">
      <button
        onClick={toggleTheme}
        className="rounded-full bg-black p-3 text-white *:size-[max(3vmin,1rem)] dark:bg-white dark:text-black"
        aria-label={darkTheme ? "Switch to light theme" : "Switch to dark theme"}
        aria-pressed={darkTheme}
        title={darkTheme ? "Switch to light theme" : "Switch to dark theme"}
      >
        <IoIosSunny className="hidden dark:block" aria-hidden="true" />
        <FaMoon className="dark:hidden" aria-hidden="true" />
      </button>
    </div>
  );
}

export default ThemeToggler;
