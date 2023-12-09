import dayjs from "dayjs";
import { SizableText, View, XStack, YStack } from "tamagui";

import { ShadowCard } from "../../../components/shadow.card";
import { OverviewStore } from "../../../data/overview.store";

const calculateMaxHourSavedOnADay = () => {
  const weekDays = Array.from({ length: 7 }).map((_, day) => {
    const dayStart = dayjs()
      .day(day + 1)
      .startOf("day")
      .valueOf();
    const dayEnd = dayjs()
      .day(day + 1)
      .endOf("day")
      .valueOf();
    const timeSaved = OverviewStore.hoursSaved({
      from: dayStart,
      to: dayEnd,
    });
    return timeSaved;
  });
  return Math.max(...weekDays);
};

export const WeeklySummary = () => {
  const maxHourSavedOnADay = calculateMaxHourSavedOnADay();
  return (
    <ShadowCard>
      <SizableText color="$text11" fontWeight={"bold"} fontSize={"$5"}>
        {OverviewStore.stillCollectingData
          ? "Weekly summary"
          : `Saved ${OverviewStore.hoursSaved({
              from: dayjs().subtract(7, "day").valueOf(),
              to: dayjs().valueOf(),
            })}h this week`}
      </SizableText>
      <XStack space="$2" marginTop="$3">
        <YStack alignItems="center" justifyContent="space-between" marginTop={"$2"} marginBottom="$4">
          <SizableText color="#797979">{maxHourSavedOnADay > 0 ? maxHourSavedOnADay : 0}h</SizableText>
          <SizableText color="#797979">{maxHourSavedOnADay / 2}h</SizableText>
          <SizableText color="#797979">{0}h</SizableText>
        </YStack>
        <XStack space="$2.5" flex={1} width={"100%"}>
          {Array.from({ length: 7 }).map((_, day) => {
            const dayStart = dayjs()
              .day(day + 1)
              .startOf("day")
              .valueOf();
            const dayEnd = dayjs()
              .day(day + 1)
              .endOf("day")
              .valueOf();
            const timeSaved = OverviewStore.hoursSaved({
              from: dayStart,
              to: dayEnd,
            });
            console.log(
              dayjs()
                .day(day + 1)
                .format("ddd"),
              timeSaved
            );
            const padding = 10;
            const height = timeSaved === 0 ? 0 : (timeSaved / maxHourSavedOnADay) * (100 - padding);
            return (
              <YStack key={day} flex={1} space="$1.5">
                <View
                  height={100}
                  backgroundColor={"$grey3"}
                  borderRadius={"$2"}
                  position="relative"
                  pressStyle={{ backgroundColor: "$grey1" }}
                >
                  <View
                    height={height}
                    backgroundColor={"$grey4"}
                    borderTopLeftRadius={"$1"}
                    borderTopRightRadius={"$1"}
                    borderBottomRightRadius={"$2"}
                    borderBottomLeftRadius={"$2"}
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    zIndex={1}
                  />
                </View>
                <SizableText color="#797979" alignSelf="center">
                  {dayjs()
                    .day(day + 1)
                    .format("ddd")}
                </SizableText>
              </YStack>
            );
          })}
        </XStack>
      </XStack>
    </ShadowCard>
  );
};
