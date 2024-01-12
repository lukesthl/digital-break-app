import { useEffect } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Check, ChevronDown, ChevronRight, ChevronUp, Trash } from "@tamagui/lucide-icons";
import { observer } from "mobx-react-lite";
import {
  Adapt,
  Button,
  H4,
  Input,
  Label,
  Paragraph,
  Popover,
  Select,
  Sheet,
  SizableText,
  Switch,
  View,
  XStack,
  YStack,
} from "tamagui";

import { Container } from "../../../components/container";
import { ShadowCard } from "../../../components/shadow.card";
import { AppSettings } from "../../../data/app.settings";

const App = observer(() => {
  const searchParams = useLocalSearchParams<{ appId: string }>();
  const selectedApp = AppSettings.apps.find((app) => app.id === searchParams.appId);
  useEffect(() => {
    if (!selectedApp) {
      void AppSettings.init();
    }
  });
  return (
    <Container paddingTop={"$4"}>
      <YStack space="$4">
        <XStack justifyContent="space-between" alignItems="center">
          <XStack space={"$2"} alignItems="center">
            <Link href="/apps/" asChild>
              <Paragraph size="$5" fontWeight={"bold"} color="#797979">
                App Settings
              </Paragraph>
            </Link>
            <ChevronRight size={16} color="#797979" strokeWidth={3} />
            <Paragraph size="$5" fontWeight={"bold"}>
              {selectedApp?.name}
            </Paragraph>
          </XStack>
        </XStack>
        <ShadowCard>
          <H4>General</H4>
          <YStack space="$4" marginTop="$2">
            <XStack alignItems="center" space="$4">
              <Label flex={1}>Status</Label>
              <View flex={2}>
                <Switch
                  checked={selectedApp?.active}
                  onCheckedChange={(value) => {
                    if (selectedApp) {
                      void AppSettings.updateAppSettings({ active: value, id: selectedApp.id });
                    }
                  }}
                >
                  <Switch.Thumb />
                </Switch>
              </View>
            </XStack>
            <XStack alignItems="center" space="$4">
              <Label flex={1}>Break Duration</Label>
              <View flex={2}>
                {selectedApp?.settings.breakDurationSeconds && (
                  <Select
                    value={selectedApp?.settings.breakDurationSeconds.toString()}
                    onValueChange={(value) => {
                      if (selectedApp) {
                        void AppSettings.updateAppSettings({
                          id: selectedApp.id,
                          settings: { ...selectedApp.settings, breakDurationSeconds: parseInt(value) },
                        });
                      }
                    }}
                    id="breakDuration"
                  >
                    <Adapt platform="touch">
                      <Sheet
                        modal
                        dismissOnSnapToBottom
                        animationConfig={{
                          type: "spring",
                          damping: 20,
                          mass: 1.1,
                          stiffness: 250,
                        }}
                      >
                        <Sheet.Frame>
                          <Sheet.ScrollView>
                            <Adapt.Contents />
                          </Sheet.ScrollView>
                        </Sheet.Frame>
                        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
                      </Sheet>
                    </Adapt>
                    <Select.Trigger flex={1} iconAfter={ChevronDown}>
                      <Select.Value></Select.Value>
                    </Select.Trigger>
                    <Select.Content>
                      <Select.ScrollUpButton
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        width="100%"
                        height="$3"
                      >
                        <YStack zIndex={10}>
                          <ChevronUp size={20} />
                        </YStack>
                      </Select.ScrollUpButton>
                      <Select.Viewport minWidth={200}>
                        <Select.Group>
                          <Select.Label />
                          {[3, 6, 10, 20, 60].map((breakTime, index) => (
                            <Select.Item debug="verbose" index={index} key={breakTime} value={breakTime.toString()}>
                              <Select.ItemText>{`${breakTime} sec`}</Select.ItemText>
                              <Select.ItemIndicator marginLeft="auto">
                                <Check size={16} />
                              </Select.ItemIndicator>
                            </Select.Item>
                          ))}
                        </Select.Group>
                      </Select.Viewport>
                      <Select.ScrollDownButton>
                        <YStack zIndex={10}>
                          <ChevronDown size={20} />
                        </YStack>
                      </Select.ScrollDownButton>
                    </Select.Content>
                  </Select>
                )}
              </View>
            </XStack>
            <YStack space="$2">
              <XStack alignItems="center" space="$4">
                <Label flex={1} lineHeight={20}>
                  Custom Quick App Switch
                </Label>
                <View flex={2}>
                  {selectedApp?.settings.quickAppSwitchDurationMinutes && (
                    <Select
                      id="quickAppSwitch"
                      value={selectedApp?.settings.quickAppSwitchDurationMinutes.toString()}
                      onValueChange={(value) => {
                        if (selectedApp) {
                          void AppSettings.updateAppSettings({
                            id: selectedApp.id,
                            settings: {
                              ...selectedApp.settings,
                              quickAppSwitchDurationMinutes: parseInt(value),
                            },
                          });
                        }
                      }}
                    >
                      <Adapt platform="touch">
                        <Sheet
                          modal
                          dismissOnSnapToBottom
                          animationConfig={{
                            type: "spring",
                            damping: 20,
                            mass: 1.1,
                            stiffness: 250,
                          }}
                        >
                          <Sheet.Frame>
                            <Sheet.ScrollView>
                              <Adapt.Contents />
                            </Sheet.ScrollView>
                          </Sheet.Frame>
                          <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
                        </Sheet>
                      </Adapt>
                      <Select.Trigger flex={1} iconAfter={ChevronDown}>
                        <Select.Value placeholder="1 min"></Select.Value>
                      </Select.Trigger>
                      <Select.Content>
                        <Select.ScrollUpButton
                          alignItems="center"
                          justifyContent="center"
                          position="relative"
                          width="100%"
                          height="$3"
                        >
                          <YStack zIndex={10}>
                            <ChevronUp size={20} />
                          </YStack>
                        </Select.ScrollUpButton>
                        <Select.Viewport minWidth={200}>
                          <Select.Group>
                            <Select.Label />
                            {[1, 3, 5, 10].map((breakTime, index) => (
                              <Select.Item debug="verbose" index={index} key={breakTime} value={breakTime.toString()}>
                                <Select.ItemText>{`${breakTime} min`}</Select.ItemText>
                                <Select.ItemIndicator marginLeft="auto">
                                  <Check size={16} />
                                </Select.ItemIndicator>
                              </Select.Item>
                            ))}
                          </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton>
                          <YStack zIndex={10}>
                            <ChevronDown size={20} />
                          </YStack>
                        </Select.ScrollDownButton>
                      </Select.Content>
                    </Select>
                  )}
                </View>
              </XStack>
              <Paragraph color="#797979" fontSize="$3" lineHeight={16}>
                When you switch to another app and come back to this app, you won&apos;t be promted to take a break.
              </Paragraph>
            </YStack>
            <YStack space="$2">
              <XStack alignItems="center" space="$4">
                <Label flex={1} lineHeight={20}>
                  Daily Time Spent
                </Label>
                <XStack flex={2} alignItems="center" space="$3">
                  <Input
                    flex={2}
                    id="dailyTimeSpent"
                    value={(selectedApp?.settings.dailyTimeSpentMinutes ?? 0).toString()}
                    onChangeText={(value) => {
                      if (selectedApp) {
                        void AppSettings.updateAppSettings({
                          id: selectedApp.id,
                          settings: {
                            ...selectedApp.settings,
                            dailyTimeSpentMinutes: parseInt(value.replace(/[^0-9]/g, "")) || 0,
                          },
                        });
                      }
                    }}
                    keyboardType="numeric"
                  />
                  <Label flex={1} lineHeight={20}>
                    minutes
                  </Label>
                </XStack>
              </XStack>
              <Paragraph color="#797979" fontSize="$3" lineHeight={16}>
                This time is used to calculate how much time you saved by not using this app.
              </Paragraph>
            </YStack>
          </YStack>
        </ShadowCard>
        <View flexDirection="row" justifyContent="flex-end">
          <Popover size="$5" allowFlip>
            <Popover.Trigger asChild>
              <Button
                variant="outlined"
                icon={() => <Trash color="red" size={16} />}
                borderColor={"rgba(255,0,0,0.2)"}
                borderWidth={1}
                size="$3"
                backgroundColor={"rgba(255,0,0,0.1)"}
              >
                <SizableText color="red" fontWeight={"bold"}>
                  Delete App Data
                </SizableText>
              </Button>
            </Popover.Trigger>

            <Popover.Content
              borderWidth={1}
              borderColor="$borderColor"
              enterStyle={{ y: -10, opacity: 0 }}
              exitStyle={{ y: -10, opacity: 0 }}
              elevate
              animation={[
                "quick",
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
            >
              <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

              <YStack space="$2">
                <SizableText size="$4" fontWeight={"bold"}>
                  Delete App Data
                </SizableText>
                <Label size="$3" lineHeight={21} htmlFor={"delete-popover"}>
                  You are about to delete all data for this app. This includes all your stats and settings.
                </Label>

                <XStack space="$2" alignItems="center" marginTop="$2">
                  <Popover.Close asChild>
                    <Button size="$3" flex={3} justifyContent="center" flexDirection="row">
                      <SizableText fontWeight={"bold"}>Cancel</SizableText>
                    </Button>
                  </Popover.Close>
                  <Popover.Close asChild>
                    <Button
                      variant="outlined"
                      flex={2}
                      borderColor={"rgba(255,0,0,0.2)"}
                      borderWidth={1}
                      size="$3"
                      backgroundColor={"rgba(255,0,0,0.1)"}
                      onPress={() => {
                        if (selectedApp) {
                          void AppSettings.deleteApp(selectedApp.id).then(() => {
                            void router.back();
                          });
                        }
                      }}
                    >
                      <SizableText color="red" fontWeight={"bold"}>
                        Delete App Data
                      </SizableText>
                    </Button>
                  </Popover.Close>
                </XStack>
              </YStack>
            </Popover.Content>
          </Popover>
        </View>
      </YStack>
    </Container>
  );
});

export default App;
