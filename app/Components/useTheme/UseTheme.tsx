"use client"
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof document !== "undefined") {
      const currentTheme = document.body.getAttribute("data-theme") as "light" | "dark" || "light";
      setTheme(currentTheme);

      const observer = new MutationObserver(() => {
        const newTheme = document.body.getAttribute("data-theme") as "light" | "dark";
        if (newTheme) {
          setTheme(newTheme);
        }
      });

      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });

      return () => observer.disconnect();
    }
  }, []);

  return theme;
}
