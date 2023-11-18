import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { TamaguiProvider } from "tamagui";

import config from "../tamagui.config";

export { ErrorBoundary } from "expo-router";
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
  return (
    <TamaguiProvider config={config}>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
