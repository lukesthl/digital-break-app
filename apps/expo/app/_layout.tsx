import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Home, User } from "@tamagui/lucide-icons";
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
      <ThemeProvider
        value={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: "#FFFFFF",
            text: "#212121",
            primary: "#212121",
            border: "#E3E3E3",
          },
        }}
      >
        <Tabs>
          <Tabs.Screen
            name="overview"
            options={{
              tabBarIcon: ({ color }) => <Home size={24} color={color} />,
              title: "Overview",
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="apps/index"
            options={{
              tabBarIcon: ({ color }) => <User size={24} color={color} />,
              title: "Apps",
            }}
          />
          <Tabs.Screen
            name="[...missing]"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            name="index"
            options={{
              href: null,
            }}
          />
        </Tabs>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
