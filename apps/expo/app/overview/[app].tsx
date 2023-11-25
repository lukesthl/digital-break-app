import { useState } from "react";
import { LineChart as LineChartGifted, PieChart as PieChartGifted } from "react-native-gifted-charts";
import { Link, useLocalSearchParams } from "expo-router";
import { ChevronRight, Cog } from "@tamagui/lucide-icons";
import { H2, H4, Paragraph, SizableText, Text, View, XStack, YStack } from "tamagui";

import { Container } from "../../components/container";
import { Divider } from "../../components/divider";
import { ShadowCard } from "../../components/shadow.card";

export default function App() {
  const searchParams = useLocalSearchParams();

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
              {searchParams.app}
            </Paragraph>
          </XStack>
          <XStack space="$1.5" alignItems="center" padding="$2" backgroundColor={"rgba(0,0,0,0.05)"} borderRadius="$3">
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
            <Chart />
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
              <H2 color="#212121" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                {12}h
              </H2>
              <Paragraph color="#797979">Saved</Paragraph>
            </YStack>
            <Divider />
            <YStack>
              <H2 color="#212121" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
                {"12"}x
              </H2>
              <Paragraph color="#797979">Interrupted</Paragraph>
            </YStack>
            <Divider />
            <YStack>
              <H2 color="#212121" fontWeight={"900"} marginBottom={-6} fontSize={"$9"}>
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
            <Chart />
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
}

// const Chart2 = () => {
//   return (
//     <LineGraph
//       points={[
//         { date: new Date(2021, 1, 1), value: 1 },
//         { date: new Date(2021, 1, 2), value: 2 },
//         { date: new Date(2021, 1, 3), value: 3 },
//         { date: new Date(2021, 1, 4), value: 4 },
//         { date: new Date(2021, 1, 5), value: 5 },
//         { date: new Date(2021, 1, 6), value: 6 },
//         { date: new Date(2021, 1, 7), value: 7 },
//         { date: new Date(2021, 1, 8), value: 8 },
//         { date: new Date(2021, 1, 9), value: 9 },
//         { date: new Date(2021, 1, 10), value: 10 },
//         { date: new Date(2021, 1, 11), value: 11 },
//         { date: new Date(2021, 1, 12), value: 12 },
//         { date: new Date(2021, 1, 13), value: 13 },
//         { date: new Date(2021, 1, 14), value: 14 },
//         { date: new Date(2021, 1, 15), value: 15 },
//         { date: new Date(2021, 1, 16), value: 16 },
//         { date: new Date(2021, 1, 17), value: 17 },
//         { date: new Date(2021, 1, 18), value: 18 },
//         { date: new Date(2021, 1, 19), value: 19 },
//         { date: new Date(2021, 1, 20), value: 20 },
//         { date: new Date(2021, 1, 21), value: 21 },
//         { date: new Date(2021, 1, 22), value: 22 },
//         { date: new Date(2021, 1, 23), value: 23 },
//         { date: new Date(2021, 1, 24), value: 24 },
//         { date: new Date(2021, 1, 25), value: 25 },
//       ]}
//       animated={true}
//       color="#797979"
//       style={{ height: 130 }}
//       enablePanGesture={true}
//     />
//   );
// };

const Chart = () => {
  const ptData = [
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
  ];
  return (
    <LineChartGifted
      areaChart
      data={ptData}
      hideDataPoints
      spacing={10}
      color="#797979"
      thickness={3}
      height={130}
      startFillColor="#939393"
      endFillColor="#E3E3E3"
      startOpacity={0.9}
      endOpacity={0.2}
      initialSpacing={0}
      noOfSections={2}
      yAxisColor="#E3E3E3"
      yAxisThickness={1}
      rulesType="dashed"
      rulesColor="#E3E3E3"
      yAxisTextStyle={{ color: "#797979", fontFamily: "Satoshi", fontSize: 12 }}
      yAxisLabelSuffix={"x"}
      yAxisLabelWidth={30}
      yAxisLabelContainerStyle={{}}
      yAxisTextNumberOfLines={3}
      rulesThickness={1}
      dataPointLabelShiftX={2}
      horizontalRulesStyle={{ color: "#121212" }}
      xAxisColor="#E3E3E3"
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
              backgroundColor={"#939393"}
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
  const pieData = [
    {
      value: 47,
      color: "#939393",
      gradientCenterColor: "#E3E3E3",
      focused: true,
    },
    { value: 40, color: "#777777", gradientCenterColor: "#E3E3E3" },
    { value: 16, color: "#555555", gradientCenterColor: "#E3E3E3" },
    { value: 3, color: "#333333", gradientCenterColor: "#E3E3E3" },
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
      innerCircleBorderColor={"#939393"}
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
