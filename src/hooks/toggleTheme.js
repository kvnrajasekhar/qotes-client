import { useState, useEffect } from "react";

export default function useTheme() {
  const [isDark, setIsDark] = useState(false);

  const applyTheme = (theme) => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved ? saved === "dark" : prefersOS;

    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
      return !prev;
    });
  };

  return { isDark, toggleTheme };
}