"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ width: 36, height: 36 }} /> // Placeholder to prevent layout shift
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="themeToggleBtn"
      aria-label="Toggle theme"
    >
      <Sun className="sunIcon" size={20} />
      <Moon className="moonIcon" size={20} />
    </button>
  );
}
