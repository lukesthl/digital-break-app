/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
import type { ImageURISource } from "react-native";
import { getAppIcon, setAppIcon } from "expo-dynamic-app-icon";
import { Check } from "@tamagui/lucide-icons";
import { Image, ListItem, View, YGroup, YStack } from "tamagui";

import { Container } from "../../components/container";

const DarkIcon = require("../../assets/images/dark.png") as ImageURISource;
const DefaultIcon = require("../../assets/images/default.png") as ImageURISource;
const LightIcon = require("../../assets/images/light.png") as ImageURISource;

const icons = [
  {
    name: "Default",
    value: "default",
    source: DefaultIcon,
  },
  {
    name: "Light",
    value: "light",
    source: LightIcon,
  },
  {
    name: "Dark",
    value: "dark",
    source: DarkIcon,
  },
] as const;

const AppIcon = () => {
  const [activeIcon, setActiveIcon] = useState(getAppIcon().toLowerCase());

  const setIcon = (value: (typeof icons)[number]["value"]) => {
    setActiveIcon(value);
    setAppIcon(value);
  };

  return (
    <Container paddingVertical={"$4"}>
      <YStack space="$3">
        <YGroup alignSelf="center" bordered size="$4">
          {icons.map((icon) => (
            <YGroup.Item key={icon.value}>
              <ListItem
                hoverTheme
                pressTheme
                icon={
                  <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                    <Image source={icon.source} style={{ width: 36, height: 36 }} borderRadius={"$3"} />
                  </View>
                }
                onPress={() => {
                  void setIcon(icon.value);
                }}
                iconAfter={activeIcon === icon.value ? <Check size={18} strokeWidth={2.5} /> : undefined}
              >
                <ListItem.Text>{icon.name}</ListItem.Text>
              </ListItem>
            </YGroup.Item>
          ))}
        </YGroup>
      </YStack>
    </Container>
  );
};

export default AppIcon;
