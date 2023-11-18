import React, { useEffect, useRef, useState } from "react";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
import { TamaguiProvider, Theme } from "tamagui";

import { translate } from "../components/translate";
import config from "../tamagui.config";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "/",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme);
  const onColorSchemeChange = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (colorScheme !== currentColorScheme) {
      onColorSchemeChange.current = setTimeout(() => setCurrentColorScheme(colorScheme), 1000);
    } else if (onColorSchemeChange.current) {
      clearTimeout(onColorSchemeChange.current);
    }
  }, [colorScheme]);
  useEffect(() => {
    void translate.init();
  }, []);
  return (
    <TamaguiProvider config={config}>
      <Theme name={currentColorScheme === "dark" ? "dark" : "light"}>
        <ThemeProvider value={currentColorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <ToastProvider swipeDirection="up">
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
            <SafeToastViewport />
          </ToastProvider>
        </ThemeProvider>
      </Theme>
    </TamaguiProvider>
  );
}

const SafeToastViewport = () => {
  const { left, top, right } = useSafeAreaInsets();
  return <ToastViewport flexDirection="column-reverse" top={top} left={left} right={right} />;
};
