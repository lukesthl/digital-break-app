import { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { router } from "expo-router";
import { ChevronRight, Plus } from "@tamagui/lucide-icons";
import { observer } from "mobx-react-lite";
import { H4, Paragraph, SizableText, View, XStack, YStack } from "tamagui";

import { AppIcon } from "../../../components/app.icon";
import { Container } from "../../../components/container";
import { Header } from "../../../components/header";
import { ShadowCard } from "../../../components/shadow.card";
import { AppSettings } from "../../../data/app.settings";

const Apps = observer(() => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const load = async () => {
      await AppSettings.init();
    };
    void load();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    void AppSettings.init().then(() => setRefreshing(false));
  };
  return (
    <Container refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <YStack space="$4">
        <Header />
        <H4 color="$text11">Apps</H4>
        <View flexDirection="row" flexWrap="wrap">
          {AppSettings.apps.map((app, index) => (
            <View
              key={`${app.name}_${index}`}
              width="50%"
              paddingRight={index % 2 === 0 ? "$2" : 0}
              paddingLeft={index % 2 === 1 ? "$2" : 0}
              paddingBottom={index < AppSettings.apps.length - 2 ? "$3" : 0}
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
                  <AppIcon appKey={app.iconKey} />
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
        </View>
        <ShadowCard
          pressStyle={{
            backgroundColor: "$grey1",
          }}
          onPress={() => {
            router.push("/setup");
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
