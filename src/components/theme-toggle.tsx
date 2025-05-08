
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative h-6 w-12 rounded-full bg-secondary p-1 shadow-inner transition-colors duration-300">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`absolute top-0 h-6 w-6 rounded-full p-0 transition-all duration-500 ${
          theme === "dark" 
            ? "left-6 bg-indigo-900 text-yellow-300" 
            : "left-0 bg-sky-500 text-yellow-200"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="h-3 w-3" />
        ) : (
          <Sun className="h-3 w-3" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
