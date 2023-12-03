import { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ChevronRight, Plus } from "@tamagui/lucide-icons";
import { keys } from "mobx";
import { observer } from "mobx-react-lite";
import { Button, H4, Image, Paragraph, SizableText, View, XStack, YStack } from "tamagui";

import { Container } from "../../../components/container";
import { Header } from "../../../components/header";
import { ShadowCard } from "../../../components/shadow.card";
import { appSettings } from "../../../data/app.settings";
import { appIcons } from "../../../data/apps";

const Apps = observer(() => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const load = async () => {
      await appSettings.init();
    };
    void load();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    void appSettings.init().then(() => setRefreshing(false));
  };
  return (
    <Container refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <YStack space="$4">
        <Header />
        <H4 color="$text11">Apps</H4>
        <View flexDirection="row" flexWrap="wrap">
          {appSettings.apps.map((app, index) => (
            <View
              key={`${app.name}_${index}`}
              width="50%"
              paddingRight={index % 2 === 0 ? "$2" : 0}
              paddingLeft={index % 2 === 1 ? "$2" : 0}
              paddingBottom="$3"
            >
              <ShadowCard
                key={`${app.name}_${index}`}
                pressStyle={{ backgroundColor: "$grey1" }}
                position="relative"
                onPress={() => {
                  router.push(`/apps/${app.id}`);
                }}
              >
                <XStack space="$2" alignItems="center">
                  <Image source={{ uri: appIcons[app.iconKey] }} width={20} height={20} />
                  <SizableText color="$text11" fontWeight={"900"} fontSize={"$5"}>
                    {app.name}
                  </SizableText>
                </XStack>
                <SizableText color="#797979">Break</SizableText>
                <SizableText color="$text11" fontWeight={"bold"} fontSize={"$6"} marginTop={-3}>
                  {app.settings.breakDurationSeconds} sec
                </SizableText>
                <View justifyContent="flex-end" flexDirection="row">
                  <XStack
                    backgroundColor="rgba(103,214,93,0.2)"
                    borderRadius={"$2"}
                    paddingHorizontal="$1.5"
                    paddingVertical="$0.5"
                  >
                    <Paragraph color="#67D65D" fontWeight={"bold"}>
                      {app.active ? "Active" : "Inactive"}
                    </Paragraph>
                  </XStack>
                </View>
                <View
                  position="absolute"
                  top={"50%"}
                  right={0}
                  justifyContent="flex-end"
                  alignItems="center"
                  marginRight="$2"
                >
                  <ChevronRight color="#797979" />
                </View>
              </ShadowCard>
            </View>
          ))}
          <Button
            onPress={() => {
              void AsyncStorage.setItem("openedApp", "instagram");
              void AsyncStorage.getAllKeys().then((keys) => {
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                console.log(`keys: ${keys}`);
              });
            }}
          >
            keys
          </Button>
        </View>
        <ShadowCard
          pressStyle={{
            backgroundColor: "$grey1",
          }}
        >
          <View borderWidth={1} borderColor={"$grey3"} borderRadius={"$2"} padding="$4" borderStyle="dashed">
            <XStack justifyContent="center" alignItems="center" space="$2">
              <Plus color="#797979" />
              <YStack>
                <SizableText color="$text11" fontWeight={"bold"} fontSize={"$5"}>
                  Add app
                </SizableText>
                <Paragraph color="#797979">Block apps to stay focused</Paragraph>
              </YStack>
            </XStack>
          </View>
        </ShadowCard>
      </YStack>
    </Container>
  );
});

export default Apps;
