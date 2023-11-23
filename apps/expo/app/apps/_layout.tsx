import { Stack } from "expo-router";
import { observer } from "mobx-react-lite";

export const unstable_settings = {
  initialRouteName: "index",
};

const OverviewLayout = observer(() => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[app]" options={{ headerBackVisible: true, headerBackTitle: "Back", title: "" }} />
    </Stack>
  );
});

export default OverviewLayout;
