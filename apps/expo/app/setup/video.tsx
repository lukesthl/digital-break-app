import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import * as Linking from "expo-linking";
import { router, useLocalSearchParams } from "expo-router";
import { observer } from "mobx-react-lite";
import { AlertDialog, Button, PortalProvider, Text, View, XStack, YStack } from "tamagui";

import { Container } from "../../components/container";
import { ShadowCard } from "../../components/shadow.card";
import { deepLinks } from "../../data/apps";

const VideoTutorial = observer(() => {
  const searchParams = useLocalSearchParams<{ appName: string; appKey: string }>();

  const [error, setError] = useState<string | null>(null);
  return (
    <PortalProvider>
      <Container paddingVertical={"$4"}>
        <ShadowCard>
          <Video
            source={{
              uri: "https://lukesthl.github.io/digital-break-app/public/setup-guide.mp4",
            }}
            style={{ width: "100%", height: 300, borderRadius: 6 }}
            useNativeControls
            resizeMode={ResizeMode.COVER}
            isLooping
            shouldPlay
          />
        </ShadowCard>
      </Container>
      <View
        position="absolute"
        bottom={0}
        paddingHorizontal="$6"
        left={0}
        right={0}
        backgroundColor={"$grey1"}
        paddingVertical="$3"
      >
        <Button
          onPress={() => {
            void Linking.openURL(deepLinks[searchParams.appKey as keyof typeof deepLinks])
              .then(() => {
                void router.replace("/overview");
              })
              .catch(() => {
                setError("Failed to open app. Are you sure it's installed?");
              });
          }}
          marginBottom="$4"
          backgroundColor={"$primary9"}
          paddingHorizontal={"$3"}
          paddingVertical={"$2"}
        >
          <Text fontWeight={"600"}>Test now 🚀</Text>
        </Button>
      </View>

      <AlertDialog open={!!error}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay key="overlay" />
          <AlertDialog.Content bordered elevate key="content">
            <YStack space>
              <AlertDialog.Title>Error</AlertDialog.Title>
              <AlertDialog.Description>{error}</AlertDialog.Description>
              <XStack space="$3" justifyContent="flex-end">
                <AlertDialog.Cancel>
                  <Button
                    onPress={() => {
                      setError(null);
                    }}
                  >
                    Dismiss
                  </Button>
                </AlertDialog.Cancel>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </PortalProvider>
  );
});

export default VideoTutorial;
