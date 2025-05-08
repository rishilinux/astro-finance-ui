
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "fenty-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => {
      try {
        const storedTheme = localStorage.getItem(storageKey) as Theme;
        return storedTheme || defaultTheme;
      } catch {
        return defaultTheme;
      }
    }
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove any existing theme classes
    root.classList.remove("light", "dark");

    // Apply the selected theme
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    // Ensure visibility by setting explicit background and text colors
    if (theme === "light") {
      document.documentElement.style.setProperty('--background', '210 50% 98%');
      document.documentElement.style.setProperty('--foreground', '222.2 84% 4.9%');
      document.body.style.backgroundColor = "#f8fafc";
      document.body.style.color = "#0f172a";
    } else {
      document.documentElement.style.setProperty('--background', '222 47% 11%');
      document.documentElement.style.setProperty('--foreground', '210 40% 98%');
      document.body.style.backgroundColor = "#1e293b";
      document.body.style.color = "#f1f5f9";
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // If localStorage fails, we still want to update the theme
      }
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
