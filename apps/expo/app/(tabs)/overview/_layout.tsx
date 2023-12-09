import { router, Stack } from "expo-router";
import { observer } from "mobx-react-lite";
import { Button, SizableText } from "tamagui";

export const unstable_settings = {
  initialRouteName: "index",
};

const OverviewLayout = observer(() => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[appId]" options={{ headerBackVisible: true, headerBackTitle: "Back", title: "" }} />
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
                <SizableText color="$text11" size="$4">
                  Done
                </SizableText>
              </Button>
            );
          },
        }}
      />
      <Stack.Screen
        name="settings/delete-app-data"
        options={{
          title: "Delete App Data",
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
                <SizableText color="$text11" size="$4">
                  Cancel
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
