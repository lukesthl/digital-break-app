import { useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import type { AnimationObject } from "lottie-react-native";
import LottieView from "lottie-react-native";
import { observer } from "mobx-react-lite";
import { Button, H3, Paragraph, View, YStack } from "tamagui";

import { Container } from "../../components/container";
import { BreakStore } from "../../data/break.store";
import { OverviewStore } from "../../data/overview.store";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const Break = observer(() => {
  const [loaded, setLoaded] = useState(false);
  const [breakStatus, setBreakStatus] = useState<"running" | "finished">("finished");
  const searchParams = useLocalSearchParams<{ appShortcutName: string }>();
  useEffect(() => {
    if (loaded) return;
    void BreakStore.init({ appShortcutName: searchParams.appShortcutName }).then(() => {
      setLoaded(true);
    });
    void OverviewStore.init();
  }, [loaded, searchParams.appShortcutName]);

  const animationProgress = useRef(new Animated.Value(0));
  const selectedApp = BreakStore.app;

  useEffect(() => {
    if (selectedApp) {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: selectedApp?.settings.breakDurationSeconds * 1000,
        easing: Easing.inOut(Easing.linear),
        useNativeDriver: false,
      }).start();
      setBreakStatus("running");

      animationProgress.current.addListener(({ value }) => {
        if (value === 1) {
          setBreakStatus("finished");
        }
      });
    }
  }, [selectedApp]);

  if (!selectedApp) {
    return null;
  }
  return (
    <Container scroll={false} flex={1} paddingBottom={0}>
      <View flex={1} marginBottom={"$12"} justifyContent="center" alignItems="center">
        <AnimatedLottieView
          progress={animationProgress.current}
          // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
          source={require("../../assets/water-drop-animation.json") as AnimationObject}
          style={{
            height: 300,
            marginBottom: -50,
          }}
        />
        <H3
          animation={"fadeIn"}
          enterStyle={{
            opacity: 0,
          }}
          marginTop="$5"
          opacity={1}
        >
          {breakStatus === "running" ? (
            BreakStore.getRandomBreakMessage()
          ) : (
            <YStack space="$1">
              <H3 textAlign="center">{selectedApp.name}</H3>
              <Paragraph
                size="$5"
                textAlign="center"
                fontWeight={"bold"}
                color="#797979"
              >{`Don't break your streak!`}</Paragraph>
              {OverviewStore.preventedByApp(selectedApp) > 0 && (
                <Paragraph
                  size="$5"
                  fontWeight={"bold"}
                  color="#797979"
                  textAlign="center"
                >{`You have prevented yourself from opening this app ${OverviewStore.preventedByApp(
                  selectedApp
                )}x`}</Paragraph>
              )}
            </YStack>
          )}
        </H3>
      </View>
      {breakStatus === "finished" && (
        <YStack
          space="$2"
          marginTop="$6"
          animation={"fadeIn"}
          enterStyle={{
            opacity: 0,
          }}
          opacity={1}
        >
          {process.env.NODE_ENV === "development" && (
            <YStack space="$2">
              <Button onPress={() => router.replace("/overview/")}>Reset</Button>
              <Button
                onPress={() => {
                  router.replace("/overview/");
                  router.replace(`/break/${selectedApp.name}`);
                }}
              >
                Restart
              </Button>
            </YStack>
          )}
          <Button
            onPress={() => {
              void BreakStore.exitApp();
            }}
          >
            {`I don't want to open ${selectedApp.name}`}
          </Button>
          <Button
            onPress={() => {
              void BreakStore.openApp();
            }}
            variant="outlined"
          >
            {`Open ${selectedApp.name}`}
          </Button>
        </YStack>
      )}
    </Container>
  );
});

export default Break;
