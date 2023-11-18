import { Check, ChevronRight, Hand, Plus, TrendingUp } from "@tamagui/lucide-icons";
import { H4, Image, Text, View, XStack, YStack } from "tamagui";

import { Container } from "../../components/container";
import { Divider } from "../../components/divider";
import { Header } from "../../components/header";
import { ShadowCard } from "../../components/shadow.card";
import { WeeklySummary } from "./weekly.summary";

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

const Overview = () => {
  return (
    <Container>
      <YStack space="$4">
        <Header />
        <H4 color="#212121">Overview</H4>
        <WeeklySummary />
        <XStack space="$4">
          <ShadowCard flex={1}>
            <View backgroundColor="rgba(254,94,42,0.2)" padding="$2" borderRadius={999} alignSelf="flex-start">
              <Hand color="#FE5E2A" />
            </View>
            <Text color="#797979" fontWeight={"600"} marginTop="$2">
              Interrupted
            </Text>
            <Text color="#212121" fontWeight={"900"} fontSize={"$10"}>
              129x
            </Text>
          </ShadowCard>
          <ShadowCard flex={1}>
            <View backgroundColor="rgba(103,214,93,0.2)" padding="$2" borderRadius={999} alignSelf="flex-start">
              <Check color="#67D65D" strokeWidth={4} />
            </View>
            <Text color="#797979" fontWeight={"600"} marginTop="$2">
              Prevented
            </Text>
            <Text color="#212121" fontWeight={"900"} fontSize={"$10"}>
              65%
            </Text>
          </ShadowCard>
        </XStack>
        {apps.map((app, index) => {
          const randomInterreption = Math.floor(Math.random() * 100) + 1;
          const randomPrevention = Math.floor(Math.random() * 100) + 1;
          const randomSaved = Math.floor(Math.random() * 10) + 1;
          return (
            <ShadowCard
              key={index}
              pressStyle={{
                backgroundColor: "#F5F5F5",
              }}
            >
              <XStack space="$2" justifyContent="space-between">
                <XStack space="$2" alignItems="center">
                  <Image source={{ uri: app.icon }} width={24} height={24} />
                  <Text color="#212121" fontWeight={"bold"} fontSize={"$5"}>
                    {app.name}
                  </Text>
                </XStack>
                <XStack
                  backgroundColor="rgba(103,214,93,0.2)"
                  padding="$2"
                  borderRadius={"$2"}
                  alignItems="center"
                  space="$1"
                >
                  <Text color="#67D65D" fontWeight={"700"}>
                    20% reduction
                  </Text>
                  <TrendingUp color="#67D65D" strokeWidth={2.5} size={16} />
                </XStack>
              </XStack>
              <XStack space="$4" marginTop="$2">
                <YStack>
                  <Text color="#212121" fontWeight={"900"} fontSize={"$9"}>
                    {randomInterreption}x
                  </Text>
                  <Text color="#797979" fontWeight={"600"}>
                    Interrupted
                  </Text>
                </YStack>
                <Divider />
                <YStack>
                  <Text color="#212121" fontWeight={"900"} fontSize={"$9"}>
                    {randomPrevention}%
                  </Text>
                  <Text color="#797979" fontWeight={"600"}>
                    Prevented
                  </Text>
                </YStack>
                <Divider />
                <YStack>
                  <Text color="#212121" fontWeight={"900"} fontSize={"$9"}>
                    {randomSaved}h
                  </Text>
                  <Text color="#797979" fontWeight={"600"}>
                    Saved
                  </Text>
                </YStack>
                <View alignSelf="center" justifyContent="flex-end" flexDirection="row" flex={1}>
                  <ChevronRight color="#797979" />
                </View>
              </XStack>
            </ShadowCard>
          );
        })}
        <ShadowCard
          pressStyle={{
            backgroundColor: "#F5F5F5",
          }}
        >
          <View borderWidth={1} borderColor={"#E3E3E3"} borderRadius={"$2"} padding="$4" borderStyle="dashed">
            <XStack justifyContent="center" alignItems="center" space="$2">
              <Plus color="#797979" />
              <YStack space="$1">
                <Text color="#212121" fontWeight={"bold"} fontSize={"$5"}>
                  Add app
                </Text>
                <Text color="#797979">Block apps to stay focused</Text>
              </YStack>
            </XStack>
          </View>
        </ShadowCard>
      </YStack>
    </Container>
  );
};

export default Overview;
