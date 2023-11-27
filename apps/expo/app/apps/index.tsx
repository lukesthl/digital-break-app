import { router } from "expo-router";
import { ChevronRight, Plus } from "@tamagui/lucide-icons";
import { H4, Image, Paragraph, SizableText, View, XStack, YStack } from "tamagui";

import { Container } from "../../components/container";
import { Header } from "../../components/header";
import { ShadowCard } from "../../components/shadow.card";

const apps = [
  {
    name: "Instagram",
    time: "1h 30m",
    color: "#E1306C",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  },
  {
    name: "Facebook",
    time: "1h 30m",
    color: "#3B5998",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174848.png",
  },
  {
    name: "Twitter",
    time: "1h 30m",
    color: "#1DA1F2",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174876.png",
  },
  {
    name: "Youtube",
    time: "1h 30m",
    color: "#FF0000",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
  },
  {
    name: "TikTok",
    time: "1h 30m",
    color: "#010101",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  },
  {
    name: "Snapchat",
    time: "1h 30m",
    color: "#FFFC00",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174848.png",
  },
  {
    name: "Reddit",
    time: "1h 30m",
    color: "#FF4500",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174876.png",
  },
  {
    name: "LinkedIn",
    time: "1h 30m",
    color: "#0A66C2",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
  },
];

const Apps = () => {
  return (
    <Container>
      <YStack space="$4">
        <Header />
        <H4 color="$text11">Apps</H4>
        <View flexDirection="row" flexWrap="wrap">
          {apps.map((app, index) => (
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
                  router.push(`/apps/${app.name}`);
                }}
              >
                <XStack space="$2" alignItems="center">
                  <Image source={{ uri: app.icon }} width={20} height={20} />
                  <SizableText color="$text11" fontWeight={"900"} fontSize={"$5"}>
                    {app.name}
                  </SizableText>
                </XStack>
                <SizableText color="#797979">Break</SizableText>
                <SizableText color="$text11" fontWeight={"bold"} fontSize={"$6"} marginTop={-3}>
                  10 sec
                </SizableText>
                <View justifyContent="flex-end" flexDirection="row">
                  <XStack
                    backgroundColor="rgba(103,214,93,0.2)"
                    borderRadius={"$2"}
                    paddingHorizontal="$1.5"
                    paddingVertical="$0.5"
                  >
                    <Paragraph color="#67D65D" fontWeight={"bold"}>
                      Active
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
};

export default Apps;
