import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CustomTheme } from "../styled";

const themePalette = {
  light: {
    primary: {
      darker: "#3c3c3c",
      lighter: "#8e8d8a",
    },
    secondary: {
      darker: "#e85a4f",
      lighter: "#e98074",
    },
    background: {
      darker: "#e3d3be",
      lighter: "#eae7dc",
      lightest: "#f1efe7",
    },
    warning: "#ff4040",
  },
  dark: {
    primary: {
      darker: "#fff",
      lighter: "#c6c6c6",
    },
    secondary: {
      darker: "#86c232",
      lighter: "#97d047",
    },
    background: {
      darker: "#474b4f",
      lighter: "#6b6e70",
      lightest: "#8c8b90",
    },
    warning: "#fc836d",
  },
};

interface ProviderProps {
  children: React.ReactNode;
}

type ThemeType = "dark" | "light";

interface AppThemeContext {
  theme: CustomTheme;
  toggle: () => void;
  type: ThemeType;
}

const ThemeContext = createContext({} as AppThemeContext);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<ThemeType>(
    "dark",
    "theme"
  );

  const toggleHandler = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const value = {
    theme: themePalette[currentTheme],
    toggle: toggleHandler,
    type: currentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
