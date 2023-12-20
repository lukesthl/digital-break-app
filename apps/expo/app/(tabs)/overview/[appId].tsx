import type { TextProps } from "react-native";
import { Link, Redirect, router, useLocalSearchParams } from "expo-router";
import { ChevronRight, Cog } from "@tamagui/lucide-icons";
import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import { H2, H4, Paragraph, SizableText, View, XStack, YStack } from "tamagui";

import { Container } from "../../../components/container";
import { Divider } from "../../../components/divider";
import { LineChart } from "../../../components/line.chart";
import { PieChart } from "../../../components/pie.chart";
import { ShadowCard } from "../../../components/shadow.card";
import { socialMediaGradients } from "../../../data/apps";
import { OverviewStore } from "../../../data/overview.store";

const labelTextStyle = { color: "#797979", width: 100, marginTop: -2, fontFamily: "Satoshi", fontSize: 12 };

const generateData = ({ statistic }: { statistic: { value: number; timestamp: number }[] }) => {
  return statistic
    .sort((a, b) => dayjs(a.timestamp).valueOf() - dayjs(b.timestamp).valueOf())
    .map((item, index) => {
      const date = dayjs(item.timestamp).format("DD MMM YYYY");
      const showLabel = dayjs(item.timestamp).date() % 11 === 1 || index === 0 || index === statistic.length - 1;
      return {
        value: item.value,
        date: date,
        label: showLabel ? date : undefined,
        labelTextStyle: showLabel ? labelTextStyle : (undefined as TextProps["style"]),
      };
    });
};

const App = observer(() => {
  const searchParams = useLocalSearchParams<{ appId: string }>();
  const selectedApp = OverviewStore.apps.find((app) => app.id === searchParams.appId);
  if (!selectedApp) {
    return <Redirect href="/overview/" />;
  }
  const interruptedLastWeek = OverviewStore.interruptionByApp(selectedApp, {
    from: dayjs().weekday(-7).startOf("week").valueOf(),
    to: dayjs().weekday(-7).endOf("day").valueOf(),
  });
  const interruptedThisWeek = OverviewStore.interruptionByApp(selectedApp, {
    from: dayjs().weekday(0).startOf("week").valueOf(),
    to: dayjs().valueOf(),
  });

  const interruptedMultiplierThisWeek = interruptedLastWeek !== 0 ? interruptedThisWeek / interruptedLastWeek : 0;
  const openingAttemptsByDay = selectedApp ? OverviewStore.interruptionsByDay(selectedApp) : null;
  const effectivenessByDayInPercentage = selectedApp ? OverviewStore.preventionsByDay(selectedApp) : null;

  const interruptionsSplitUpByAppInPercentage = OverviewStore.interruptionsSplitUpByAppInPercentage();

  return (
    <Container paddingTop={"$4"}>
      <YStack space="$4">
        <XStack justifyContent="space-between" alignItems="center">
          <XStack space={"$2"} alignItems="center">
            <Link href="/overview/" asChild>
              <Paragraph size="$5" fontWeight={"bold"} color="#797979">
                Overview
              </Paragraph>
            </Link>
            <ChevronRight size={16} color="#797979" strokeWidth={3} />
            <Paragraph size="$5" fontWeight={"bold"}>
              {selectedApp?.name}
            </Paragraph>
          </XStack>
          <XStack
            space="$1.5"
            alignItems="center"
            padding="$2"
            backgroundColor={"rgba(0,0,0,0.05)"}
            borderRadius="$3"
            onPress={() => router.push(`/apps/${selectedApp?.id}`)}
          >
            <Cog size={16} />
            <Paragraph>Settings</Paragraph>
          </XStack>
        </XStack>
        <ShadowCard>
          <H4>Opening attempts</H4>
          <Paragraph color="#797979" lineHeight={20}>
            In comparison to the last week you tried to open this app{" "}
            <SizableText fontWeight={"bold"}>
              {interruptedMultiplierThisWeek.toFixed(0)}x {interruptedMultiplierThisWeek >= 0 ? "more" : "less"}
            </SizableText>
            .
          </Paragraph>
          <View overflow="hidden" marginTop="$3">
            <LineChart
              data={
                openingAttemptsByDay && openingAttemptsByDay.length > 10
                  ? generateData({
                      statistic: (openingAttemptsByDay ?? []).map((attempt) => ({
                        timestamp: attempt.dateUnix,
                        value: attempt.value,
                      })),
                    })
                  : generateData({
                      statistic: Array.from({ length: 30 }).map((_, i) => ({
                        timestamp: dayjs().subtract(i, "day").valueOf(),
                        value: Math.floor(Math.random() * 30) + 10,
                      })),
                    })
              }
              dummy={openingAttemptsByDay ? openingAttemptsByDay?.length < 10 : false}
            />
          </View>
        </ShadowCard>
        <ShadowCard>
          <H4>Time saved</H4>
          <Paragraph color="#797979" lineHeight={20}>
            You tried to open this app{" "}
            <SizableText fontWeight={"bold"}>{OverviewStore.interruptionByApp(selectedApp)}x</SizableText> which
            prevented you from spending{" "}
            <SizableText fontWeight={"bold"}>{OverviewStore.hoursSavedByApp(selectedApp)}h</SizableText> on it.
          </Paragraph>
          <XStack space="$4" marginTop="$2">
            <YStack>
              <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                {OverviewStore.hoursSavedByApp(selectedApp)}h
              </H2>
              <Paragraph color="#797979">Saved</Paragraph>
            </YStack>
            <Divider />
            <YStack>
              <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                {OverviewStore.interruptionByApp(selectedApp)}x
              </H2>
              <Paragraph color="#797979">Interrupted</Paragraph>
            </YStack>
            <Divider />
            <YStack>
              <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                {OverviewStore.preventedByAppInPercentage(selectedApp)}%
              </H2>
              <Paragraph color="#797979">Prevented</Paragraph>
            </YStack>
          </XStack>
        </ShadowCard>
        <ShadowCard>
          <H4>Effectiveness</H4>
          <View overflow="hidden" marginTop="$3">
            <LineChart
              labelSuffix="%"
              data={
                effectivenessByDayInPercentage && effectivenessByDayInPercentage.length > 10
                  ? generateData({
                      statistic: (effectivenessByDayInPercentage ?? []).map((attempt) => ({
                        timestamp: attempt.dateUnix,
                        value: attempt.value,
                      })),
                    })
                  : generateData({
                      statistic: Array.from({ length: 30 }).map((_, i) => ({
                        timestamp: dayjs().subtract(i, "day").valueOf(),
                        value: Math.floor(Math.random() * 30) + 10,
                      })),
                    })
              }
              dummy={effectivenessByDayInPercentage ? effectivenessByDayInPercentage?.length < 10 : false}
            />
          </View>
        </ShadowCard>
        <ShadowCard>
          <H4>Share of total apps</H4>
          <Paragraph color="#797979" lineHeight={20}>
            <SizableText fontWeight={"bold"}>
              {
                interruptionsSplitUpByAppInPercentage.find((interruptions) => interruptions.app.id === selectedApp.id)
                  ?.percentage
              }
              %
            </SizableText>{" "}
            of your attempts were on {selectedApp.name}.
          </Paragraph>
          <View overflow="hidden" flexDirection="row" justifyContent="center">
            <PieChart
              data={interruptionsSplitUpByAppInPercentage.map((interruptions) => {
                return {
                  color: socialMediaGradients[interruptions.app.key][0],
                  gradientCenterColor:
                    socialMediaGradients[interruptions.app.key][socialMediaGradients[interruptions.app.key].length - 1],
                  value: interruptions.percentage,
                  label: interruptions.app.name,
                  focused: interruptions.app.id === selectedApp.id,
                };
              })}
            />
          </View>
        </ShadowCard>
      </YStack>
    </Container>
  );
});
export default App;
