import { useState } from "react";
import { WebView } from "react-native-webview";
import { router, useLocalSearchParams } from "expo-router";
import { observer } from "mobx-react-lite";
import { AlertDialog, Button, PortalProvider, Text, View, XStack, YStack } from "tamagui";

import { Container } from "../../components/container";
import { ShadowCard } from "../../components/shadow.card";
import { OverviewStore } from "../../data/overview.store";

const VideoTutorial = observer(() => {
  const searchParams = useLocalSearchParams<{ appName: string; appKey: string }>();

  const [error, setError] = useState<string | null>(null);
  return (
    <PortalProvider>
      <Container paddingVertical={"$4"}>
        <ShadowCard>
          <WebView
            style={{
              width: "100%",
              height: 300,
              borderWidth: 0,
              borderRadius: 12,
              padding: 0,
              margin: 0,
              backgroundColor: "transparent",
            }}
            source={{
              html: '<video src="https://lukesthl.github.io/digital-break-app/public/setup-guide.mp4" width="100%" height="100%" controls autoplay muted loop playsinline></video>',
            }}
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
            void OverviewStore.openApp(searchParams.appKey)
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
