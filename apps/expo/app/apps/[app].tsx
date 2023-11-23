import { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Check, ChevronDown, ChevronRight, ChevronUp, Trash } from "@tamagui/lucide-icons";
import { Adapt, Button, H4, Label, Paragraph, Select, Sheet, SizableText, Switch, View, XStack, YStack } from "tamagui";

import { Container } from "../../components/container";
import { ShadowCard } from "../../components/shadow.card";

export default function App() {
  const searchParams = useLocalSearchParams();
  const [active, setActive] = useState(false);
  const [breakDuration, setBreakDuration] = useState(0);
  const [quickAppSwitch, setQuickAppSwitch] = useState(0);
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
              {searchParams.app}
            </Paragraph>
          </XStack>
        </XStack>
        <ShadowCard>
          <H4>General</H4>
          <YStack space="$4" marginTop="$2">
            <XStack alignItems="center" space="$4">
              <Label flex={1}>Status</Label>
              <View flex={2}>
                <Switch defaultChecked={active} onCheckedChange={(value) => setActive(value)}>
                  <Switch.Thumb />
                </Switch>
              </View>
            </XStack>
            <XStack alignItems="center" space="$4">
              <Label flex={1}>Break Duration</Label>
              <View flex={2}>
                <Select
                  defaultValue={breakDuration.toString()}
                  onValueChange={(value) => setBreakDuration(parseInt(value))}
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
                    <Select.Value placeholder="Default (10 sec)"></Select.Value>
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
              </View>
            </XStack>
            <YStack space="$2">
              <XStack alignItems="center" space="$4">
                <Label flex={1} lineHeight={20}>
                  Custom Quick App Switch
                </Label>
                <View flex={2}>
                  <Select
                    defaultValue={quickAppSwitch.toString()}
                    onValueChange={(value) => setQuickAppSwitch(parseInt(value))}
                    id="quickAppSwitch"
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
                              <Select.ItemText>{`Quick App Switch for ${breakTime} min`}</Select.ItemText>
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
                </View>
              </XStack>
              <Paragraph color="#797979" fontSize="$3" lineHeight={16}>
                When you switch to another app and come back to this app, you will not be promted to take a break.
              </Paragraph>
            </YStack>
          </YStack>
        </ShadowCard>
        <View flexDirection="row" justifyContent="flex-end">
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
        </View>
      </YStack>
    </Container>
  );
}
