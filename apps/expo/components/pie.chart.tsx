import { useEffect, useState } from "react";
import { PieChart as PieChartGifted } from "react-native-gifted-charts";
import { H4, Paragraph, SizableText, useTheme, View, YStack } from "tamagui";

export const PieChart = ({
  data,
  dummy,
}: {
  data: {
    label: string;
    color: string;
    value: number;
    focused?: boolean;
    gradientCenterColor?: string;
  }[];
  labelSuffix?: string;
  dummy?: boolean;
}) => {
  const theme = useTheme();
  const grey4 = theme.grey4?.val as string;
  const [focusedData, setFocusedData] = useState<(typeof data)[0] | null>(null);
  useEffect(() => {
    setFocusedData(data.find((d) => d.focused) ?? data[0] ?? null);
  }, [data]);
  return (
    <View position="relative">
      {dummy && (
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor={"rgba(255,255,255,0.7)"}
          zIndex={99}
          flexDirection="row"
          alignItems="center"
          paddingBottom={"$6"}
          justifyContent="center"
        >
          <YStack flex={1}>
            <H4 fontWeight={"bold"} fontSize={"$5"} textAlign="center">
              Collecting data
            </H4>
            <Paragraph textAlign="center" lineHeight={20}>
              We are collecting data for this chart. It will be available in a few days.
            </Paragraph>
          </YStack>
        </View>
      )}
      <PieChartGifted
        data={data}
        donut
        showGradient
        toggleFocusOnPress={false}
        sectionAutoFocus
        innerCircleColor={focusedData?.color ?? grey4}
        onPress={(focused: (typeof data)[0]) => {
          setFocusedData(focused);
        }}
        innerCircleBorderColor={focusedData?.color ?? grey4}
        focusOnPress
        centerLabelComponent={() => {
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <H4 color="white" textAlign="center">
                {focusedData?.value}%
              </H4>
              <SizableText color="white">{focusedData?.label}</SizableText>
            </View>
          );
        }}
      />
    </View>
  );
};
