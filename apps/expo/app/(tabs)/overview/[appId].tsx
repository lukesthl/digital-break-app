import { useState } from "react";
import type { Text as ReactNativeText, TextProps } from "react-native";
import { LineChart as LineChartGifted, PieChart as PieChartGifted } from "react-native-gifted-charts";
import { Link, router, useLocalSearchParams } from "expo-router";
import { ChevronRight, Cog } from "@tamagui/lucide-icons";
import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import { getTokenValue, H2, H4, Paragraph, SizableText, Text, View, XStack, YStack } from "tamagui";

import { Container } from "../../../components/container";
import { Divider } from "../../../components/divider";
import { ShadowCard } from "../../../components/shadow.card";
import { OverviewStore } from "../../../data/overview.store";

const labelTextStyle = { color: "#797979", width: 60, marginTop: -2, fontFamily: "Satoshi", fontSize: 12 };

const generateData = ({ statistic }: { statistic: { value: number; timestamp: number }[] }) => {
  return statistic.map((item) => {
    const date = dayjs(item.timestamp).format("DD MMM YYYY");

    return {
      value: item.value,
      date: date,
      label: dayjs(item.timestamp).date() % 10 === 1 || dayjs(item.timestamp).date() === 1 ? date : undefined,
      labelTextStyle:
        dayjs(item.timestamp).date() % 10 === 1 || dayjs(item.timestamp).date() === 1
          ? labelTextStyle
          : (undefined as TextProps["style"]),
    };
  });
};

const App = observer(() => {
  const searchParams = useLocalSearchParams<{ appId: string }>();
  const selectedApp = OverviewStore.apps.find((app) => app.id === searchParams.appId);

  const openingAttempts = selectedApp ? OverviewStore.interruptionsByDay(selectedApp) : null;
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
            <SizableText fontWeight={"bold"}>3x more</SizableText>.
          </Paragraph>
          <View overflow="hidden" marginTop="$3">
            <Chart
              data={generateData({
                statistic: (openingAttempts ?? []).map((attempt) => ({
                  timestamp: attempt.dateUnix,
                  value: attempt.value,
                })),
              })}
            />
          </View>
        </ShadowCard>
        <ShadowCard>
          <H4>Time saved</H4>
          <Paragraph color="#797979" lineHeight={20}>
            You tried to open this app <SizableText fontWeight={"bold"}>12x</SizableText> which prevented you from
            spending <SizableText fontWeight={"bold"}>12h</SizableText> on it.
          </Paragraph>
          <XStack space="$4" marginTop="$2">
            <YStack>
              <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                {12}h
              </H2>
              <Paragraph color="#797979">Saved</Paragraph>
            </YStack>
            <Divider />
            <YStack>
              <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                {"12"}x
              </H2>
              <Paragraph color="#797979">Interrupted</Paragraph>
            </YStack>
            <Divider />
            <YStack>
              <H2 color="$text11" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                {12}%
              </H2>
              <Paragraph color="#797979">Prevented</Paragraph>
            </YStack>
          </XStack>
        </ShadowCard>
        <ShadowCard>
          <H4>Effectiveness</H4>
          <Paragraph color="#797979" lineHeight={20}>
            In comparison to the last week you tried to open this app{" "}
            <SizableText fontWeight={"bold"}>3x more</SizableText>.
          </Paragraph>
          <View overflow="hidden" marginTop="$3">
            <Chart
              data={[
                {
                  value: 16,
                  date: "1 Apr 2022",
                  label: "1 Apr",
                  labelTextStyle: { color: "#797979", width: 60, marginTop: -2, fontFamily: "Satoshi", fontSize: 12 },
                },
                { value: 18, date: "2 Apr 2022" },
                { value: 19, date: "3 Apr 2022" },
                { value: 18, date: "4 Apr 2022" },
                { value: 14, date: "5 Apr 2022" },
                { value: 14, date: "6 Apr 2022" },
                { value: 16, date: "7 Apr 2022" },
                { value: 20, date: "8 Apr 2022" },

                { value: 22, date: "9 Apr 2022" },
                {
                  value: 24,
                  date: "10 Apr 2022",
                  label: "10 Apr",
                  labelTextStyle: { color: "#797979", width: 60, marginTop: -2, fontFamily: "Satoshi", fontSize: 12 },
                },
                { value: 28, date: "11 Apr 2022" },
                { value: 26, date: "12 Apr 2022" },
                { value: 34, date: "13 Apr 2022" },
                { value: 38, date: "14 Apr 2022" },
                { value: 28, date: "15 Apr 2022" },
                { value: 39, date: "16 Apr 2022" },

                { value: 37, date: "17 Apr 2022" },
                { value: 28, date: "18 Apr 2022" },
                { value: 29, date: "19 Apr 2022" },
                {
                  value: 30,
                  date: "20 Apr 2022",
                  label: "20 Apr",

                  labelTextStyle: { color: "#797979", width: 60, marginTop: -2, fontFamily: "Satoshi", fontSize: 12 },
                },
                { value: 28, date: "21 Apr 2022" },
                { value: 29, date: "22 Apr 2022" },
                { value: 26, date: "23 Apr 2022" },
                { value: 25, date: "24 Apr 2022" },

                { value: 19, date: "25 Apr 2022" },
                { value: 22, date: "26 Apr 2022" },
                { value: 20, date: "27 Apr 2022" },
                { value: 23, date: "28 Apr 2022" },
                { value: 21, date: "29 Apr 2022" },
                {
                  value: 20,
                  date: "30 Apr 2022",
                  label: "30 Apr",

                  labelTextStyle: { color: "#797979", width: 60, marginTop: -2, fontFamily: "Satoshi", fontSize: 12 },
                },
                { value: 24, date: "1 May 2022" },
                { value: 25, date: "2 May 2022" },
                { value: 28, date: "3 May 2022" },
                { value: 25, date: "4 May 2022" },
                { value: 21, date: "5 May 2022" },
              ]}
            />
          </View>
        </ShadowCard>
        <ShadowCard>
          <H4>Share of total apps</H4>
          <Paragraph color="#797979" lineHeight={20}>
            <SizableText fontWeight={"bold"}>37%</SizableText> of your attempts were on this app.
          </Paragraph>
          <View overflow="hidden" flexDirection="row" justifyContent="center">
            <PieChart />
          </View>
        </ShadowCard>
      </YStack>
    </Container>
  );
});
export default App;

const Chart = ({
  data,
}: {
  data: {
    date: string;
    value: number;
    label?: string;
    labelTextStyle?: React.ComponentProps<typeof ReactNativeText>["style"];
  }[];
}) => {
  const grey3 = getTokenValue("$grey3") as string;
  const grey4 = getTokenValue("$grey4") as string;
  return (
    <LineChartGifted
      areaChart
      data={data}
      hideDataPoints
      spacing={10}
      color="#797979"
      thickness={3}
      height={130}
      startFillColor={grey4}
      endFillColor={grey3}
      startOpacity={0.9}
      endOpacity={0.2}
      initialSpacing={0}
      noOfSections={2}
      yAxisColor={grey3}
      yAxisThickness={1}
      rulesType="dashed"
      rulesColor={grey3}
      yAxisTextStyle={{ color: "#797979", fontFamily: "Satoshi", fontSize: 12 }}
      yAxisLabelSuffix={"x"}
      yAxisLabelWidth={30}
      yAxisLabelContainerStyle={{}}
      yAxisTextNumberOfLines={3}
      rulesThickness={1}
      dataPointLabelShiftX={2}
      horizontalRulesStyle={{ color: "#121212" }}
      xAxisColor={grey3}
      animateOnDataChange
      animationDuration={1000}
      isAnimated
      pointerConfig={{
        pointerStripHeight: 160,
        pointerStripColor: "#797979",
        pointerStripWidth: 2,
        pointerColor: "#797979",
        radius: 6,
        pointerLabelWidth: 100,
        pointerLabelHeight: 90,
        activatePointersOnLongPress: true,
        autoAdjustPointerLabelPosition: false,
        pointerLabelComponent: (items: [{ date: string; value: string }]) => {
          return (
            <View
              style={{
                height: 90,
                width: 100,
                justifyContent: "center",
                marginTop: -30,
                marginLeft: -40,
              }}
              backgroundColor={grey4}
            >
              <Text style={{ color: "white", fontSize: 14, marginBottom: 6, textAlign: "center" }}>
                {items[0].date}
              </Text>

              <View
                style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: "white" }}
                backgroundColor={"white"}
              >
                <Text style={{ fontWeight: "bold", textAlign: "center", color: "black" }}>
                  {"$" + items[0].value + ".0"}
                </Text>
              </View>
            </View>
          );
        },
      }}
    />
  );
};

const PieChart = () => {
  const grey3 = getTokenValue("$grey3") as string;
  const grey4 = getTokenValue("$grey4") as string;
  const pieData = [
    {
      value: 47,
      color: grey4,
      gradientCenterColor: grey3,
      focused: true,
    },
    { value: 40, color: "#777777", gradientCenterColor: grey3 },
    { value: 16, color: "#555555", gradientCenterColor: grey3 },
    { value: 3, color: "#333333", gradientCenterColor: grey3 },
  ];
  const [focusedData, setFocusedData] = useState<(typeof pieData)[0] | null>(pieData[0] ? pieData[0] : null);

  return (
    <PieChartGifted
      data={pieData}
      donut
      showGradient
      toggleFocusOnPress={false}
      sectionAutoFocus
      innerCircleColor={"#797979"}
      onPress={(data: (typeof pieData)[0]) => {
        setFocusedData(data);
      }}
      innerCircleBorderColor={grey4}
      focusOnPress
      centerLabelComponent={() => {
        return (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <H4 color="white">{focusedData?.value}%</H4>
            <SizableText color="white">{"TikTok"}</SizableText>
          </View>
        );
      }}
    />
  );
};
