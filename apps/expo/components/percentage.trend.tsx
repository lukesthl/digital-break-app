import { TrendingDown, TrendingUp } from "@tamagui/lucide-icons";
import { Paragraph, XStack } from "tamagui";

export const PercentageTrend = ({ percentage }: { percentage: number }) => (
  <XStack
    backgroundColor={percentage > 0 ? "rgba(103,214,93,0.2)" : "rgba(255,0,0,0.2)"}
    borderRadius={"$2"}
    alignItems="center"
    space="$1"
    paddingHorizontal="$2"
    paddingVertical="$1"
  >
    <Paragraph color={percentage > 0 ? "#67D65D" : "red"} fontWeight={"bold"}>
      {Math.round(percentage)}% {percentage > 0 ? "more" : "less"}
    </Paragraph>
    {percentage > 0 ? (
      <TrendingUp color="#67D65D" strokeWidth={2.5} size={16} />
    ) : (
      <TrendingDown color="red" strokeWidth={2.5} size={16} />
    )}
  </XStack>
);
