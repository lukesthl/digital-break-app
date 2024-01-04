import { router, Stack } from "expo-router";
import { observer } from "mobx-react-lite";
import { Button, SizableText } from "tamagui";

export const unstable_settings = {
  initialRouteName: "index",
};

const BreakLayout = observer(() => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Select App",
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
                  Skip
                </SizableText>
              </Button>
            );
          },
        }}
      />
      <Stack.Screen
        name="steps"
        options={{
          title: "Instructions",
          headerRight: () => {
            return (
              <Button
                pressStyle={{
                  backgroundColor: "transparent",
                  borderWidth: 0,
                }}
                onPress={() => {
                  router.back();
                  router.back();
                }}
                borderWidth={0}
                size="$4"
                backgroundColor={"transparent"}
              >
                <SizableText color="$text11" size="$4">
                  Skip
                </SizableText>
              </Button>
            );
          },
        }}
      />
    </Stack>
  );
});

export default BreakLayout;
