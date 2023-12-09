import { useEffect } from "react";
import { router } from "expo-router";
import { AlertTriangle, Check, ChevronRight, Plus, ShieldBan, TrendingUp } from "@tamagui/lucide-icons";
import { observer } from "mobx-react-lite";
import { H1, H2, H4, Image, Paragraph, SizableText, View, XStack, YStack } from "tamagui";

import { Container } from "../../../components/container";
import { Divider } from "../../../components/divider";
import { Header } from "../../../components/header";
import { ShadowCard } from "../../../components/shadow.card";
import { appIcons } from "../../../data/apps";
import { OverviewStore } from "../../../data/overview.store";
import { WeeklySummary } from "./weekly.summary";

const Overview = observer(() => {
  useEffect(() => {
    void OverviewStore.init();
  }, []);
  return (
    <Container>
      <YStack space="$4">
        <Header />
        <H4 color="$text11">Overview</H4>
        <WeeklySummary />
        {OverviewStore.stillCollectingData && (
          <ShadowCard>
            <XStack space="$3">
              <View backgroundColor="$yellow4" padding="$2" borderRadius={999} alignSelf="flex-start">
                <AlertTriangle color="#F7B955" />
              </View>
              <YStack flex={1}>
                <Paragraph color="$text11" fontWeight={"900"} marginTop="$1">
                  Collecting data
                </Paragraph>
                <SizableText color="$text6" fontSize={"$3"} lineHeight={16}>
                  We need more data to show you how much time you’ve saved.
                </SizableText>
              </YStack>
            </XStack>
          </ShadowCard>
        )}
        <XStack space="$4">
          <ShadowCard flex={1}>
            <View backgroundColor="rgba(254,94,42,0.2)" padding="$2" borderRadius={999} alignSelf="flex-start">
              <ShieldBan color="#FE5E2A" />
            </View>
            <Paragraph color="#797979" marginTop="$1">
              Interrupted
            </Paragraph>
            <H1 color="$text11" lineHeight={50} marginBottom={-6}>
              {OverviewStore.totalInterrupted}x
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
              {OverviewStore.totalPreventedInPercentage}%
            </H1>
          </ShadowCard>
        </XStack>
        {OverviewStore.apps.map((app, index) => {
          return (
            <ShadowCard
              key={index}
              pressStyle={{
                backgroundColor: "$grey1",
              }}
              onPress={() => {
                router.push(`/overview/${app.id}`);
              }}
            >
              <XStack space="$2" justifyContent="space-between">
                <XStack space="$2" alignItems="center">
                  <Image source={{ uri: appIcons[app.iconKey] }} width={20} height={20} />
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
                    x% reduction
                  </Paragraph>
                  <TrendingUp color="#67D65D" strokeWidth={2.5} size={16} />
                </XStack>
              </XStack>
              <XStack space="$4" marginTop="$2">
                <YStack>
                  <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                    {OverviewStore.hoursSavedByApp(app)}h
                  </H2>
                  <Paragraph color="#797979">Saved</Paragraph>
                </YStack>
                <Divider />
                <YStack>
                  <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                    {OverviewStore.interruptionByApp(app)}x
                  </H2>
                  <Paragraph color="#797979">Interrupted</Paragraph>
                </YStack>
                <Divider />
                <YStack>
                  <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                    {OverviewStore.preventedByAppInPercentage(app)}%
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
});

export default Overview;
