import { useEffect, useRef } from "react";
import { AppState } from "react-native";
import { useFonts } from "expo-font";
import { router, SplashScreen, Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { TamaguiProvider, useTheme as useThemeTamagui } from "tamagui";

import "../data/logger";

import { ThemeProvider, useTheme } from "../components/theme-provider";
import { clearShortcutListener, listenForShortcut } from "../data/shortcut.listener";
import { ShortCutPayload } from "../data/shortcut.payload";
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

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const checkShortcut = () => {
      void listenForShortcut()
        .then(({ app, timestamp }) => {
          console.log("shortcut", app, timestamp);
          router.replace(`/break/${app}?timestamp=${timestamp}`);
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
        // void ShortCutPayload.clear();
        console.log("this would clear the shortcut listener");
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
      <ThemeProvider>
        <NavigationStack />
      </ThemeProvider>
    </TamaguiProvider>
  );
}

const NavigationStack = () => {
  const { theme } = useTheme();
  const tamaguiTheme = useThemeTamagui();
  return (
    <NavigationThemeProvider
      value={
        theme === "light"
          ? {
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: "#FFFFFF",
                text: tamaguiTheme.text11?.val as string,
                primary: tamaguiTheme.text11?.val as string,
                border: tamaguiTheme.grey3?.val as string,
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
        <Stack.Screen name="settings" options={{ headerShown: false, presentation: "modal" }} />
        <Stack.Screen name="setup" options={{ headerShown: false, presentation: "modal" }} />
      </Stack>
    </NavigationThemeProvider>
  );
};
