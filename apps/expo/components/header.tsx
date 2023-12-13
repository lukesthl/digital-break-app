import { Link, router } from "expo-router";
import { Coffee, Cog } from "@tamagui/lucide-icons";
import { Button, Heading, XStack } from "tamagui";

export const Header = () => (
  <XStack alignItems="center" justifyContent="space-between">
    <XStack space="$2" alignItems="center">
      <Button
        shadowColor={"black"}
        shadowOpacity={0.1}
        shadowRadius={6}
        borderColor={"$grey3"}
        shadowOffset={{ width: 0, height: 2 }}
        width={36}
        height={36}
        backgroundColor={"rgba(0,0,0,0.05)"}
        borderRadius="$3"
      >
        <Coffee color="$text11" size={24} />
      </Button>
      <Heading color="$text11">Digital Break</Heading>
    </XStack>
    <Button
      backgroundColor={"$background1"}
      shadowColor={"black"}
      shadowOpacity={0.1}
      shadowRadius={6}
      pressStyle={{
        backgroundColor: "$grey3",
        borderColor: "$grey3",
      }}
      borderRadius={999}
      borderWidth={1}
      borderColor={"$grey3"}
      shadowOffset={{ width: 0, height: 2 }}
      width={48}
      onPress={() => {
        router.push("/settings");
      }}
      height={48}
    >
      <Cog color="#868686" />
    </Button>
  </XStack>
);
