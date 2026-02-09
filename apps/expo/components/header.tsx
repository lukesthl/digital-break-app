import type { ImageSourcePropType } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { DarkTheme } from "@react-navigation/native";
import { Cog } from "@tamagui/lucide-icons";
import { Button, Heading, Image, XStack } from "tamagui";

import { useTheme } from "./theme-provider";

export const Header = ({ isSticky, ...props }: React.ComponentProps<typeof XStack> & { isSticky?: boolean }) => {
  const { theme } = useTheme();

  const insets = useSafeAreaInsets();
  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={theme === "light" ? "#FFF" : DarkTheme.colors.background}
      marginBottom="$1"
      paddingHorizontal="$4"
      paddingBottom="$3"
      paddingTop={insets.top + 8}
      borderColor={"$grey3"}
      borderBottomWidth={isSticky ? 1 : 0}
      {...props}
    >
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
          disabled
        >
          <Image
            source={
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              require("../assets/images/digital-break-hourglass-icon.png") as ImageSourcePropType
            }
            //source={require("../assets/images/default.png") as any}
            width={26}
            height={26}
            resizeMode="contain"
          />
          {/* <Coffee color="$text11" size={24} /> */}
          {/* <Hourglass color="$text11" size={24} strokeWidth={2} /> */}
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
};
