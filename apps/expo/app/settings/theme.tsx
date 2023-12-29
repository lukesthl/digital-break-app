import { Check, Moon, Smartphone, Sun } from "@tamagui/lucide-icons";
import { ListItem, View, YGroup, YStack } from "tamagui";

import { Container } from "../../components/container";
import { useTheme } from "../../components/theme-provider";
import { themeTypes } from "../../theme/theme-builder";

const Theme = () => {
  const { theme, setTheme, autoTheme } = useTheme();
  return (
    <Container paddingVertical={"$4"}>
      <YStack space="$3">
        <YGroup alignSelf="center" bordered size="$4">
          {(["auto", ...themeTypes] as const).map((themeType) => (
            <YGroup.Item key={themeType}>
              <ListItem
                hoverTheme
                pressTheme
                icon={
                  <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                    {themeType === "light" ? (
                      <Sun size={24} />
                    ) : themeType === "auto" ? (
                      <Smartphone size={24} />
                    ) : (
                      <Moon size={24} />
                    )}
                  </View>
                }
                onPress={() => {
                  setTheme(themeType);
                }}
                iconAfter={
                  (autoTheme && themeType === "auto") || (theme === themeType && !autoTheme) ? (
                    <Check size={18} strokeWidth={2.5} />
                  ) : undefined
                }
              >
                <ListItem.Text>
                  {themeType === "light" ? "Light" : themeType === "auto" ? "Auto" : "Dark"}
                </ListItem.Text>
              </ListItem>
            </YGroup.Item>
          ))}
        </YGroup>
      </YStack>
    </Container>
  );
};

export default Theme;
