import { Link } from "expo-router";
import { Coffee, Cog } from "@tamagui/lucide-icons";
import { Button, Heading, XStack } from "tamagui";

export const Header = () => (
  <XStack alignItems="center" justifyContent="space-between">
    <XStack space="$2" alignItems="center">
      <Button
        shadowColor={"black"}
        shadowOpacity={0.1}
        shadowRadius={6}
        borderColor={"#E3E3E3"}
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
    <Link href={"/overview/settings/modal"} asChild>
      <Button
        backgroundColor={"$background1"}
        shadowColor={"black"}
        shadowOpacity={0.1}
        shadowRadius={6}
        pressStyle={{
          backgroundColor: "#E3E3E3",
          borderColor: "#E3E3E3",
        }}
        borderRadius={999}
        borderWidth={1}
        borderColor={"#E3E3E3"}
        shadowOffset={{ width: 0, height: 2 }}
        width={48}
        height={48}
      >
        <Cog color="#868686" />
      </Button>
    </Link>
  </XStack>
);
