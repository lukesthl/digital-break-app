import { router } from "expo-router";
import {
  Box,
  ChevronRight,
  Database,
  Dices,
  ExternalLink,
  FileInput,
  Github,
  Heart,
  Import,
  Info,
  Mail,
  Repeat,
  Share,
  ShieldCheck,
  SunMoon,
  Trash,
  Upload,
  Vibrate,
} from "@tamagui/lucide-icons";
import { Button, H5, ListItem, SizableText, Switch, View, YGroup, YStack } from "tamagui";

import { Container } from "../../components/container";
import { OverviewStore } from "../../data/overview.store";
import { SettingsStore } from "../../data/settings.store";

const Settings = () => (
  <Container paddingVertical={"$4"}>
    <YStack space="$3">
      <YGroup alignSelf="center" bordered size="$4">
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <Box size={20} />
              </View>
            }
            iconAfter={ChevronRight}
          >
            <ListItem.Text>{"App Icon"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <SunMoon size={20} />
              </View>
            }
            iconAfter={ChevronRight}
          >
            <ListItem.Text>{"Theme"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <Vibrate size={20} />
              </View>
            }
            iconAfter={() => (
              <Switch size="$4">
                <Switch.Thumb animation="bouncy" />
              </Switch>
            )}
          >
            <ListItem.Text>{"Haptics"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
      </YGroup>
      <YGroup alignSelf="center" bordered size="$4">
        <YGroup.Item>
          <ListItem
            pressTheme
            hoverTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <Repeat size={20} />
              </View>
            }
            iconAfter={ChevronRight}
          >
            <ListItem.Text>{"Quick App Switching (5 min.)"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            pressTheme
            hoverTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <Info size={20} />
              </View>
            }
            iconAfter={ChevronRight}
          >
            <ListItem.Text>{"Show Tutorial"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            pressTheme
            hoverTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <Heart size={20} />
              </View>
            }
            iconAfter={Share}
          >
            <ListItem.Text>{"Share Digital Break with friends"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
      </YGroup>
      <H5>{"Data"}</H5>
      <YGroup alignSelf="center" bordered size="$4">
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <FileInput size={20} />
              </View>
            }
            iconAfter={Import}
          >
            <ListItem.Text>{"Import Data"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <Database size={20} />
              </View>
            }
            iconAfter={Upload}
          >
            <ListItem.Text>{"Export Data"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <Database size={20} />
              </View>
            }
            onPress={() => {
              void SettingsStore.generateRandomTestData().then(() => {
                router.back();
                void OverviewStore.init();
              });
            }}
            iconAfter={Dices}
          >
            <ListItem.Text>{"Generate Random Data"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
      </YGroup>
      <H5>{"Legal Information"}</H5>
      <YGroup alignSelf="center" bordered size="$4">
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <ShieldCheck size={20} />
              </View>
            }
            iconAfter={ExternalLink}
          >
            <ListItem.Text>{"Privacy Policy"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <Github size={20} />
              </View>
            }
            iconAfter={ExternalLink}
          >
            <ListItem.Text>{"Constribute to Digital Break"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={
              <View backgroundColor="$gray5" borderRadius={"$3"} padding="$2">
                <Mail size={20} />
              </View>
            }
            iconAfter={ExternalLink}
          >
            <ListItem.Text>{"Support"}</ListItem.Text>
          </ListItem>
        </YGroup.Item>
      </YGroup>

      <View flexDirection="row" justifyContent="flex-end">
        <Button
          variant="outlined"
          icon={() => <Trash color="red" size={16} />}
          borderWidth={0}
          size="$3"
          pressStyle={{
            backgroundColor: "rgba(255,0,0,0.1)",
          }}
          onPress={() => {
            router.push("/settings/delete-app-data");
          }}
        >
          <SizableText color="red" fontWeight={"bold"}>
            Delete App Data
          </SizableText>
        </Button>
      </View>
    </YStack>
  </Container>
);

export default Settings;
