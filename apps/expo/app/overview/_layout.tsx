import { Stack } from "expo-router";
import { observer } from "mobx-react-lite";

export const unstable_settings = {
  initialRouteName: "index",
};

const OverviewLayout = observer(() => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings/modal"
        options={{
          title: "Settings",
          presentation: "modal",
        }}
      />
    </Stack>
  );
});

export default OverviewLayout;
