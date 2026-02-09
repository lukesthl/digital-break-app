import { Stack } from "expo-router";
import { observer } from "mobx-react-lite";

export const unstable_settings = {
  initialRouteName: "index",
};

const OverviewLayout = observer(() => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Apps" }}
      />
      <Stack.Screen
        name="[appId]"
        options={{ headerBackVisible: true, title: "" }}
      />
    </Stack>
  );
});

export default OverviewLayout;
