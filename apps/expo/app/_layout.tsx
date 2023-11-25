import { useEffect, useRef, useState } from "react";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { BarChart2, LayoutGrid } from "@tamagui/lucide-icons";
import { SizableText, TamaguiProvider, Theme } from "tamagui";

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
                    text: "#212121",
                    primary: "#212121",
                    border: "#E3E3E3",
                  },
                }
              : DarkTheme
          }
        >
          <Tabs screenOptions={{ tabBarStyle: { minHeight: 80 } }}>
            <Tabs.Screen
              name="overview"
              options={{
                tabBarIcon: ({ color, focused }) => (
                  <BarChart2 size={20} color={color} strokeWidth={focused ? 2.5 : undefined} style={{ marginTop: 8 }} />
                ),
                tabBarLabel: ({ color, focused }) => (
                  <SizableText color={color} fontWeight={focused ? "bold" : undefined} lineHeight={16}>
                    Overview
                  </SizableText>
                ),
                headerShown: false,
              }}
            />
            <Tabs.Screen
              name="apps"
              options={{
                tabBarIcon: ({ color, focused }) => (
                  <LayoutGrid
                    size={20}
                    color={color}
                    strokeWidth={focused ? 2.5 : undefined}
                    style={{ marginTop: 8 }}
                  />
                ),
                tabBarLabel: ({ color, focused }) => (
                  <SizableText color={color} fontWeight={focused ? "bold" : undefined} lineHeight={16}>
                    Apps
                  </SizableText>
                ),
                headerShown: false,
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
      </Theme>
    </TamaguiProvider>
  );
}
