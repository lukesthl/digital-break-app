import { router, Stack } from "expo-router";
import { observer } from "mobx-react-lite";

import "react-native";

import { Button, SizableText } from "tamagui";

export const unstable_settings = {
  initialRouteName: "index",
};

const OverviewLayout = observer(() => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[app]" options={{ headerBackVisible: true, headerBackTitle: "Back", title: "" }} />
      <Stack.Screen
        name="settings/modal"
        options={{
          title: "Settings",
          presentation: "modal",
          headerRight: () => {
            return (
              <Button
                pressStyle={{
                  backgroundColor: "transparent",
                  borderWidth: 0,
                }}
                onPress={() => {
                  router.back();
                }}
                borderWidth={0}
                size="$4"
                backgroundColor={"transparent"}
              >
                <SizableText color="#212121" size="$4">
                  Done
                </SizableText>
              </Button>
            );
          },
        }}
      />
    </Stack>
  );
});

export default OverviewLayout;
