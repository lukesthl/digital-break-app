import { router } from "expo-router";
import { Button, Label, SizableText, View, XStack, YStack } from "tamagui";

import { Container } from "../../../../components/container";
import { AppSettings } from "../../../../data/app.settings";
import { OverviewStore } from "../../../../data/overview.store";

const DeleteAppData = () => (
  <Container paddingVertical={"$4"}>
    <YStack space="$3">
      <View flexDirection="row" justifyContent="flex-end">
        <YStack space="$2">
          <Label size="$3" lineHeight={21} htmlFor={"delete-popover"}>
            You are about to delete all your app data. This action cannot be undone.
          </Label>

          <XStack space="$2" alignItems="center" marginTop="$2">
            <Button size="$3" flex={1} justifyContent="center" flexDirection="row" onPress={() => router.back()}>
              <SizableText fontWeight={"bold"}>Cancel</SizableText>
            </Button>
            <Button
              variant="outlined"
              flex={1}
              borderColor={"rgba(255,0,0,0.2)"}
              borderWidth={1}
              size="$3"
              backgroundColor={"rgba(255,0,0,0.1)"}
              onPress={() => {
                void AppSettings.dangerouslyDeleteAllData().then(() => {
                  void OverviewStore.init().then(() => {
                    router.back();
                  });
                });
              }}
            >
              <SizableText color="red" fontWeight={"bold"}>
                Delete all data
              </SizableText>
            </Button>
          </XStack>
        </YStack>
      </View>
    </YStack>
  </Container>
);

export default DeleteAppData;
