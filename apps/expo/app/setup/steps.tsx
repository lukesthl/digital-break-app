import { useState } from "react";
import * as Linking from "expo-linking";
import { router, useLocalSearchParams } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { ExternalLink, Layers2, Youtube } from "@tamagui/lucide-icons";
import { observer } from "mobx-react-lite";
import {
  AlertDialog,
  Button,
  H4,
  Image,
  Paragraph,
  PortalProvider,
  SizableText,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";

import { Container } from "../../components/container";
import { ShadowCard } from "../../components/shadow.card";
import { deepLinks } from "../../data/apps";

const Setup = observer(() => {
  const searchParams = useLocalSearchParams<{ appName: string; appKey: string }>();

  const [error, setError] = useState<string | null>(null);
  return (
    <PortalProvider>
      <Container paddingVertical={"$4"}>
        <YStack space="$4">
          <>
            <H4 color="$text11">Tutorial</H4>
            <Paragraph color="$text11">Step by step instructions to get you started.</Paragraph>
          </>
          <ShadowCard>
            <Button
              height={50}
              backgroundColor={"#FF3131"}
              pressStyle={{
                backgroundColor: "#FF0000",
              }}
              icon={<Youtube size={20} />}
              onPress={() => router.push("/setup/video")}
            >
              Video Tutorial
            </Button>
          </ShadowCard>
          <ShadowCard>
            <XStack space="$3" alignItems={"flex-start"}>
              <View
                backgroundColor={"$grey1"}
                borderRadius={999}
                height={"$2.5"}
                width={"$2.5"}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="$text11" fontWeight={"800"} fontSize={"$6"}>
                  1
                </Text>
              </View>
              <View marginTop={"$1.5"} flex={1}>
                <H4 color="$text11" lineHeight={20}>
                  Download the shortcut
                </H4>
                <Paragraph color="$text11">and import it into the Shortcuts app.</Paragraph>
                <Button
                  onPress={() => {
                    void WebBrowser.openBrowserAsync(
                      `https://lukesthl.github.io/digital-break-app/public/shortcuts/${encodeURIComponent(
                        searchParams.appName + " Digital Break"
                      )}.shortcut`
                    );
                  }}
                  marginTop="$2"
                  backgroundColor={"$primary9"}
                  paddingHorizontal={"$3"}
                  paddingVertical={"$2"}
                  iconAfter={<Layers2 size={16} strokeWidth={2.5} />}
                >
                  <Text fontWeight={"600"}>Download Shortcut</Text>
                </Button>
              </View>
            </XStack>
            <XStack space="$3" marginTop="$2" height={280}>
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                source={require("../../assets/images/setup/01_shortcut_download.png")}
                width={"100%"}
                height={"100%"}
                flex={1}
                borderRadius={"$3"}
              />
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                source={require("../../assets/images/setup/02_add_shortcut.png")}
                width={"100%"}
                height={"100%"}
                borderRadius={"$3"}
                flex={1}
              />
            </XStack>
          </ShadowCard>
          <ShadowCard>
            <XStack space="$3">
              <View
                backgroundColor={"$grey1"}
                borderRadius={999}
                height={"$2.5"}
                width={"$2.5"}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="$text11" fontWeight={"800"} fontSize={"$6"}>
                  2
                </Text>
              </View>
              <View marginTop={"$1.5"} flex={1}>
                <H4 color="$text11" lineHeight={20}>
                  Open the Shortcut app
                </H4>
                <Paragraph color="$text11">Go to Automations tab and create a new automation.</Paragraph>
                <Button
                  onPress={() => {
                    void Linking.openURL("shortcuts://automation");
                  }}
                  marginTop="$2"
                  backgroundColor={"$primary9"}
                  paddingHorizontal={"$3"}
                  paddingVertical={"$2"}
                  iconAfter={<ExternalLink size={16} />}
                >
                  <Text fontWeight={"600"}>Open Shortcuts App</Text>
                </Button>
              </View>
            </XStack>
            <XStack space="$3" marginTop={"$2"} height={300}>
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                source={require("../../assets/images/setup/03_add_automation.png")}
                resizeMode="cover"
                width={"100%"}
                height={"100%"}
                flex={1}
                borderRadius={"$3"}
              />
            </XStack>
          </ShadowCard>
          <ShadowCard>
            <XStack space="$3" alignItems={"flex-start"}>
              <View
                backgroundColor={"$grey1"}
                borderRadius={999}
                height={"$2.5"}
                width={"$2.5"}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="$text11" fontWeight={"800"} fontSize={"$6"}>
                  3
                </Text>
              </View>
              <View marginTop={"$1.5"} flex={1}>
                <H4 color="$text11" lineHeight={20}>
                  Select &quot;App&quot;-Automation
                </H4>
                <Paragraph color="$text11">Scroll down and select &quot;App&quot; as the trigger.</Paragraph>
              </View>
            </XStack>
            <XStack space="$3" marginTop={"$2"} height={300}>
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                source={require("../../assets/images/setup/04_configure_automation.png")}
                resizeMode="cover"
                width={"100%"}
                height={"100%"}
                flex={1}
                borderRadius={"$3"}
              />
            </XStack>
          </ShadowCard>
          <ShadowCard>
            <XStack space="$3" alignItems={"flex-start"}>
              <View
                backgroundColor={"$grey1"}
                borderRadius={999}
                height={"$2.5"}
                width={"$2.5"}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="$text11" fontWeight={"800"} fontSize={"$6"}>
                  4
                </Text>
              </View>
              <View marginTop={"$1.5"} flex={1}>
                <H4 color="$text11" lineHeight={20}>
                  Configure the Automation
                </H4>
                <Paragraph color="$text11" lineHeight={20} marginTop="$1.5">
                  - Select &quot;Choose&quot; and search for{" "}
                  <SizableText fontWeight={"bold"}>{searchParams.appName}</SizableText>.
                </Paragraph>
                <Paragraph color="$text11" lineHeight={20}>
                  - Select &quot;<SizableText fontWeight={"bold"}>Run Immediately</SizableText>&quot;
                </Paragraph>
                <Paragraph color="$text11" lineHeight={20}>
                  - Set &quot;<SizableText fontWeight={"bold"}>Notify When Run</SizableText>&quot; to false
                </Paragraph>
                <Paragraph color="$text11" lineHeight={20}>
                  - Select &quot;Next&quot; when you are done.
                </Paragraph>
                <Paragraph color="$text11" lineHeight={16} fontWeight={"bold"} marginTop={"$1.5"}>
                  Info: You need to create a new automation for every app you want to use.
                </Paragraph>
              </View>
            </XStack>
            <XStack space="$3" marginTop={"$2"} height={400}>
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                source={require("../../assets/images/setup/05_configure_automation.png")}
                resizeMode="cover"
                width={"100%"}
                height={"100%"}
                flex={1}
                borderRadius={"$3"}
              />
            </XStack>
          </ShadowCard>
          <ShadowCard>
            <XStack space="$3" alignItems={"flex-start"}>
              <View
                backgroundColor={"$grey1"}
                borderRadius={999}
                height={"$2.5"}
                width={"$2.5"}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="$text11" fontWeight={"800"} fontSize={"$6"}>
                  5
                </Text>
              </View>
              <View marginTop={"$1.5"} flex={1}>
                <H4 color="$text11" lineHeight={22}>
                  Configure Shortcut
                </H4>
                <Paragraph color="$text11" lineHeight={20} marginTop="$1.5">
                  Search for &quot;{searchParams.appName} Digital Break&quot; and select it.
                </Paragraph>
              </View>
            </XStack>
            <XStack space="$3" marginTop={"$2"} height={450}>
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                source={require("../../assets/images/setup/06_automation_shortcut.png")}
                resizeMode="cover"
                width={"100%"}
                height={"100%"}
                flex={1}
                borderRadius={"$3"}
              />
            </XStack>
          </ShadowCard>
          <ShadowCard>
            <XStack space="$3" alignItems={"flex-start"}>
              <View
                backgroundColor={"$grey1"}
                borderRadius={999}
                height={"$2.5"}
                width={"$2.5"}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="$text11" fontWeight={"800"} fontSize={"$6"}>
                  6
                </Text>
              </View>
              <View marginTop={"$1.5"} flex={1}>
                <H4 color="$text11" lineHeight={24}>
                  Congrats 🎉
                </H4>
                <Paragraph color="$text11" lineHeight={20} marginTop="$1.5">
                  You are all set. Now you can try to open {searchParams.appName} and see what happens.
                </Paragraph>
                <Paragraph color="$text11" lineHeight={20}>
                  The App will be displayed in Digital Break Overview after the first time you open it.
                </Paragraph>
              </View>
            </XStack>
          </ShadowCard>
          <Button
            onPress={() => {
              void Linking.openURL(deepLinks[searchParams.appKey as keyof typeof deepLinks])
                .then(() => {
                  void router.replace("/overview");
                })
                .catch(() => {
                  setError("Failed to open app. Are you sure it's installed?");
                });
            }}
            marginBottom="$4"
            backgroundColor={"$primary9"}
            paddingHorizontal={"$3"}
            paddingVertical={"$2"}
          >
            <Text fontWeight={"600"}>Test now 🚀</Text>
          </Button>
        </YStack>
      </Container>
      <AlertDialog open={!!error}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay key="overlay" />
          <AlertDialog.Content bordered elevate key="content">
            <YStack space>
              <AlertDialog.Title>Error</AlertDialog.Title>
              <AlertDialog.Description>{error}</AlertDialog.Description>
              <XStack space="$3" justifyContent="flex-end">
                <AlertDialog.Cancel>
                  <Button
                    onPress={() => {
                      setError(null);
                    }}
                  >
                    Dismiss
                  </Button>
                </AlertDialog.Cancel>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </PortalProvider>
  );
});

export default Setup;
