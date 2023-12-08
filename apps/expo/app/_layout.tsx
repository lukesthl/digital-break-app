import { useEffect, useRef, useState } from "react";
import { AppState, useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { router, SplashScreen, Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { getTokenValue, TamaguiProvider, Theme } from "tamagui";

import "../data/logger";

import { clearShortcutListener, listenForShortcut } from "../data/shortcut.listener";
import config from "../tamagui.config";

export { ErrorBoundary } from "expo-router";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Satoshi: require("../assets/fonts/satoshi/Satoshi-Medium.otf"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    SatoshiBold: require("../assets/fonts/satoshi/Satoshi-Bold.otf"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    SatoshiBlack: require("../assets/fonts/satoshi/Satoshi-Black.otf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme);
  const onColorSchemeChange = useRef<NodeJS.Timeout>();

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    if (colorScheme !== currentColorScheme) {
      onColorSchemeChange.current = setTimeout(() => setCurrentColorScheme(colorScheme), 1000);
    } else if (onColorSchemeChange.current) {
      clearTimeout(onColorSchemeChange.current);
    }
  }, [colorScheme, currentColorScheme]);

  useEffect(() => {
    const checkShortcut = () => {
      void listenForShortcut()
        .then(({ app }) => {
          console.log("shortcut", app);
          router.replace(`/break/${app}`);
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        })
        .finally(() => {
          SplashScreen.hideAsync();
        });
    };
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        checkShortcut();
        console.log("App has come to the foreground!");
      } else if (appState.current.match(/active/) && nextAppState === "background") {
        clearShortcutListener();
        console.log("App has come to the background!");
      }
      appState.current = nextAppState;
    });
    checkShortcut();
    return () => {
      clearShortcutListener();
      subscription.remove();
    };
  }, []);
  return (
    <TamaguiProvider config={config}>
      <Theme name={currentColorScheme === "dark" ? "dark" : "light"}>
        <ThemeProvider
          value={
            currentColorScheme === "light"
              ? {
                  ...DefaultTheme,
                  colors: {
                    ...DefaultTheme.colors,
                    background: "#FFFFFF",
                    text: getTokenValue("$text11") as string,
                    primary: getTokenValue("$text11") as string,
                    border: getTokenValue("$grey3") as string,
                  },
                }
              : {
                  ...DarkTheme,
                  colors: {
                    ...DarkTheme.colors,
                  },
                }
          }
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="break" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </Theme>
    </TamaguiProvider>
  );
}
