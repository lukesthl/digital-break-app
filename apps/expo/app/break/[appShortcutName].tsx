import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import type { AnimationObject } from "lottie-react-native";
import LottieView from "lottie-react-native";
import { observer } from "mobx-react-lite";
import { Button, View, YStack } from "tamagui";

import { Container } from "../../components/container";
import { BreakStore } from "../../data/break.store";

const Break = observer(() => {
  const [loaded, setLoaded] = useState(false);
  const searchParams = useLocalSearchParams<{ appShortcutName: string }>();
  useEffect(() => {
    if (loaded) return;
    void BreakStore.init({ appShortcutName: searchParams.appShortcutName }).then(() => {
      setLoaded(true);
    });
  }, [loaded, searchParams.appShortcutName]);
  return (
    <Container scroll={false} flex={1} paddingBottom={0}>
      <View flex={1}>
        <LottieView
          autoPlay
          loop
          // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
          source={require("../../assets/water-drop-animation.json") as AnimationObject}
        />
      </View>
      <YStack space="$2">
        {process.env.NODE_ENV === "development" && (
          <>
            <Button onPress={() => router.replace("/overview/")}>Reset</Button>
            <Button
              onPress={() => {
                router.replace("/overview/");
                router.replace(`/break/${BreakStore.app?.name}`);
              }}
            >
              Restart
            </Button>
          </>
        )}
        <Button
          onPress={() => {
            void BreakStore.exitApp();
          }}
        >
          I don&apos;t want to open this app
        </Button>
        <Button
          onPress={() => {
            void BreakStore.openApp();
          }}
          variant="outlined"
        >
          {`Open ${BreakStore.app?.name}`}
        </Button>
      </YStack>
    </Container>
  );
});

export default Break;
