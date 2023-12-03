import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { observer } from "mobx-react-lite";
import { Button, H2, View } from "tamagui";

import * as ExpoExitApp from "../../../../packages/expo-exit-app";
import { Container } from "../../components/container";
import { BreakStore } from "../../data/break.store";

const Break = observer(() => {
  const searchParams = useLocalSearchParams<{ appShortcutName: string }>();
  useEffect(() => {
    void BreakStore.init({ appShortcutName: searchParams.appShortcutName });
  }, []);
  return (
    <Container scrollEnabled={false} backgroundColor={"$background2"} flex={1}>
      <View backgroundColor={"red"} flex={1} flexDirection="column" justifyContent="center">
        <H2>Take a break</H2>
      </View>
      <View flex={1} flexDirection="column" justifyContent="center">
        <Button onPress={() => router.replace("/overview/")}>Reset</Button>
      </View>
      <View flex={1} flexDirection="column" justifyContent="center">
        <Button
          onPress={() => {
            try {
              ExpoExitApp.exit();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          I don&apos;t want to open this app
        </Button>
      </View>
    </Container>
  );
});

export default Break;
