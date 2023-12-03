import { Stack } from "expo-router";
import { observer } from "mobx-react-lite";

export const unstable_settings = {
  initialRouteName: "[appShortcutName]",
};

const BreakLayout = observer(() => {
  return (
    <Stack>
      <Stack.Screen name="[appShortcutName]" options={{ headerShown: false, presentation: "fullScreenModal" }} />
    </Stack>
  );
});

export default BreakLayout;
