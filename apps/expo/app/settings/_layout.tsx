import { router, Stack } from "expo-router";
import { observer } from "mobx-react-lite";
import { Button, SizableText } from "tamagui";

export const unstable_settings = {
  initialRouteName: "modal",
};

const SettingsLayout = observer(() => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
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
        name="delete-app-data"
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
      <Stack.Screen
        name="app-icon"
        options={{
          title: "App Icon",
        }}
      />
      <Stack.Screen
        name="theme"
        options={{
          title: "Theme",
        }}
      />
    </Stack>
  );
});

export default SettingsLayout;
