import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme } from "tamagui";

export const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: ThemeType | "auto") => void;
  autoTheme: boolean;
}>({
  theme: "light",
  setTheme: () => {
    console.warn("Missing ThemeProvider");
  },
  autoTheme: false,
});

export type ThemeType = "light" | "dark";

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>("light");
  const [autoTheme, setAutoTheme] = useState<boolean>(false);

  const colorScheme = useColorScheme();
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme);
  const onColorSchemeChange = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const init = async () => {
      if (colorScheme !== currentColorScheme) {
        onColorSchemeChange.current = setTimeout(() => setCurrentColorScheme(colorScheme), 1000);
      } else if (onColorSchemeChange.current) {
        clearTimeout(onColorSchemeChange.current);
      }
      const storedTheme = await AsyncStorage.getItem("theme");
      setAutoTheme(storedTheme === "auto" || !storedTheme);
      if (storedTheme === "auto" || !storedTheme) {
        setThemeState(colorScheme === "dark" ? "dark" : "light");
      } else {
        setThemeState(storedTheme as ThemeType);
      }
    };
    void init();
  }, [colorScheme, currentColorScheme]);

  const setTheme = (theme: ThemeType | "auto") => {
    if (theme === "auto") {
      setThemeState(colorScheme === "dark" ? "dark" : "light");
    } else {
      setThemeState(theme);
    }
    setAutoTheme(theme === "auto");
    void AsyncStorage.setItem("theme", theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, autoTheme }}>
      <Theme name={theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
};
