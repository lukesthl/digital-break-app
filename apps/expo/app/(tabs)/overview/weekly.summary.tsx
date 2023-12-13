import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import { Paragraph, SizableText, View, XStack, YStack } from "tamagui";

import { ShadowCard } from "../../../components/shadow.card";
import { OverviewStore } from "../../../data/overview.store";

import "dayjs/locale/de";

import { TrendingDown, TrendingUp } from "@tamagui/lucide-icons";

import { PercentageTrend } from "../../../components/percentage.trend";

dayjs.extend(weekday);
dayjs.locale("de");

const calculateMaxHourSavedOnADay = () => {
  const weekDays = Array.from({ length: 7 }).map((_, day) => {
    const dayStart = dayjs().weekday(day).startOf("day").valueOf();
    const dayEnd = dayjs().weekday(day).endOf("day").valueOf();
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

  const savedThisWeek = OverviewStore.hoursSaved({
    from: dayjs().weekday(0).startOf("week").valueOf(),
    to: dayjs().valueOf(),
  });
  const savedLastWeek = OverviewStore.hoursSaved({
    from: dayjs().weekday(-7).startOf("week").valueOf(),
    to: dayjs().weekday(-7).endOf("week").valueOf(),
  });
  const difference = savedThisWeek - savedLastWeek;
  const savedThisWeekInPercentage = difference > 0 && savedLastWeek > 0 ? (difference / savedLastWeek) * 100 : 0;
  return (
    <ShadowCard>
      <XStack justifyContent="space-between">
        <SizableText color="$text11" fontWeight={"bold"} fontSize={"$5"}>
          {OverviewStore.stillCollectingData || savedThisWeek === 0
            ? "Weekly summary"
            : `Saved ${savedThisWeek}h this week`}
        </SizableText>
        <SizableText color="$text11" fontWeight={"bold"} fontSize={"$5"}>
          {savedThisWeekInPercentage !== 0 && <PercentageTrend percentage={savedThisWeekInPercentage} />}
        </SizableText>
      </XStack>
      <XStack space="$2" marginTop="$3">
        <YStack
          alignItems="center"
          justifyContent={maxHourSavedOnADay > 0 ? "space-between" : "flex-end"}
          marginTop={"$2"}
          marginBottom={maxHourSavedOnADay > 0 ? "$4" : "$5"}
        >
          {maxHourSavedOnADay > 0 && <SizableText color="$grey7">{maxHourSavedOnADay}h</SizableText>}
          {maxHourSavedOnADay > 0 && <SizableText color="$grey7">{maxHourSavedOnADay / 2}h</SizableText>}
          <SizableText color="$grey7">{0}h</SizableText>
        </YStack>
        <XStack space="$2.5" flex={1} width={"100%"}>
          {Array.from({ length: 7 }).map((_, day) => {
            const dayStart = dayjs().weekday(day).startOf("day").valueOf();
            const dayEnd = dayjs().weekday(day).endOf("day").valueOf();
            const timeSaved = OverviewStore.hoursSaved({
              from: dayStart,
              to: dayEnd,
            });
            console.log(dayjs().weekday(day).format("DD.MM.YYYY"));
            const padding = 5;
            const height = timeSaved === 0 ? 0 : (timeSaved / maxHourSavedOnADay) * (100 - padding);
            const isToday = dayjs().weekday(day).isSame(dayjs(), "day");
            const inFuture = dayjs().weekday(day).isAfter();
            return (
              <YStack key={day} flex={1} space="$1.5">
                <View
                  height={100}
                  backgroundColor={inFuture ? "$grey2" : "$grey3"}
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
                <SizableText
                  color={isToday ? "$grey10" : "$grey7"}
                  alignSelf="center"
                  fontWeight={isToday ? "bold" : undefined}
                >
                  {dayjs()
                    .day(day + 1)
                    .format("dd")}
                </SizableText>
              </YStack>
            );
          })}
        </XStack>
      </XStack>
    </ShadowCard>
  );
};
