import dayjs from "dayjs";
import { SizableText, View, XStack, YStack } from "tamagui";

import { ShadowCard } from "../../components/shadow.card";

export const WeeklySummary = () => {
  return (
    <ShadowCard>
      <SizableText color="$text11" fontWeight={"bold"} fontSize={"$5"}>
        Saved 9h this week
      </SizableText>
      <XStack space="$2" marginTop="$3">
        <YStack alignItems="center" justifyContent="space-between" marginTop={"$2"} marginBottom="$4">
          <SizableText color="#797979">1h</SizableText>
          <SizableText color="#797979">0.5h</SizableText>
          <SizableText color="#797979">0h</SizableText>
        </YStack>
        <XStack space="$2.5" flex={1} width={"100%"}>
          {Array.from({ length: 7 }).map((_, day) => {
            const height = Math.floor(Math.random() * 100) + 1;
            return (
              <YStack key={day} flex={1} space="$1.5">
                <View
                  height={100}
                  backgroundColor={"#E3E3E3"}
                  borderRadius={"$2"}
                  position="relative"
                  pressStyle={{ backgroundColor: "#D1D1D1" }}
                >
                  <View
                    height={height}
                    backgroundColor={"#939393"}
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
