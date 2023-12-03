import { router } from "expo-router";
import { Check, ChevronRight, Plus, ShieldBan, TrendingUp } from "@tamagui/lucide-icons";
import { H1, H2, H4, Image, Paragraph, SizableText, View, XStack, YStack } from "tamagui";

import { Container } from "../../../components/container";
import { Divider } from "../../../components/divider";
import { Header } from "../../../components/header";
import { ShadowCard } from "../../../components/shadow.card";
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
        <H4 color="$text11">Overview</H4>
        <WeeklySummary />
        <XStack space="$4">
          <ShadowCard flex={1}>
            <View backgroundColor="rgba(254,94,42,0.2)" padding="$2" borderRadius={999} alignSelf="flex-start">
              <ShieldBan color="#FE5E2A" />
            </View>
            <Paragraph color="#797979" marginTop="$1">
              Interrupted
            </Paragraph>
            <H1 color="$text11" lineHeight={50} marginBottom={-6}>
              129x
            </H1>
          </ShadowCard>
          <ShadowCard flex={1}>
            <View backgroundColor="rgba(103,214,93,0.2)" padding="$2" borderRadius={999} alignSelf="flex-start">
              <Check color="#67D65D" />
            </View>
            <Paragraph color="#797979" marginTop="$1">
              Prevented
            </Paragraph>
            <H1 color="$text11" lineHeight={50} marginBottom={-6}>
              65%
            </H1>
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
                backgroundColor: "$grey1",
              }}
              onPress={() => {
                router.push(`/overview/${app.name}`);
              }}
            >
              <XStack space="$2" justifyContent="space-between">
                <XStack space="$2" alignItems="center">
                  <Image source={{ uri: app.icon }} width={20} height={20} />
                  <SizableText color="$text11" fontWeight={"900"} fontSize={"$5"}>
                    {app.name}
                  </SizableText>
                </XStack>
                <XStack
                  backgroundColor="rgba(103,214,93,0.2)"
                  borderRadius={"$2"}
                  alignItems="center"
                  space="$1"
                  paddingHorizontal="$2"
                  paddingVertical="$1"
                >
                  <Paragraph color="#67D65D" fontWeight={"bold"}>
                    20% reduction
                  </Paragraph>
                  <TrendingUp color="#67D65D" strokeWidth={2.5} size={16} />
                </XStack>
              </XStack>
              <XStack space="$4" marginTop="$2">
                <YStack>
                  <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                    {randomSaved}h
                  </H2>
                  <Paragraph color="#797979">Saved</Paragraph>
                </YStack>
                <Divider />
                <YStack>
                  <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                    {randomInterreption}x
                  </H2>
                  <Paragraph color="#797979">Interrupted</Paragraph>
                </YStack>
                <Divider />
                <YStack>
                  <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                    {randomPrevention}%
                  </H2>
                  <Paragraph color="#797979">Prevented</Paragraph>
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

export default Overview;
