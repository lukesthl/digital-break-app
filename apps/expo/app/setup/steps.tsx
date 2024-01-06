import * as Linking from "expo-linking";
import { router, useLocalSearchParams } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { observer } from "mobx-react-lite";
import { Button, H4, Paragraph, SizableText, Text, View, XStack, YStack } from "tamagui";

import { Container } from "../../components/container";
import { ShadowCard } from "../../components/shadow.card";

const Setup = observer(() => {
  const searchParams = useLocalSearchParams<{ appName: string }>();
  return (
    <Container paddingVertical={"$4"}>
      <YStack space="$4">
        <>
          <H4 color="$text11">Tutorial</H4>
          <Paragraph color="$text11">Step by step instructions to get you started.</Paragraph>
        </>
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
              <Paragraph color="$text11">Import the shortcut into your Shortcuts app.</Paragraph>
              <Button
                onPress={() => {
                  void WebBrowser.openBrowserAsync(
                    `https://lukesthl.github.io/digital-break-app/public/shortcuts/${encodeURIComponent(
                      searchParams.appName
                    )}.shortcut`
                  );
                }}
                marginTop="$2"
                backgroundColor={"$primary9"}
                paddingHorizontal={"$3"}
                paddingVertical={"$2"}
              >
                <Text fontWeight={"600"}>Download and import shortcut</Text>
              </Button>
            </View>
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
              <Paragraph color="$text11">Go to Automations and create a new automation.</Paragraph>
              <Button
                onPress={() => {
                  void Linking.openURL("shortcuts://automation");
                }}
                marginTop="$2"
                backgroundColor={"$primary9"}
                paddingHorizontal={"$3"}
                paddingVertical={"$2"}
              >
                <Text fontWeight={"600"}>Open Shortcuts App</Text>
              </Button>
            </View>
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
                The App will be displayed in Digital Break after the first time you open it.
              </Paragraph>
            </View>
          </XStack>
        </ShadowCard>
        <Button
          onPress={() => {
            void router.back();
            void router.back();
          }}
          marginBottom="$4"
          backgroundColor={"$primary9"}
          paddingHorizontal={"$3"}
          paddingVertical={"$2"}
        >
          <Text fontWeight={"600"}>Done 🚀</Text>
        </Button>
      </YStack>
    </Container>
  );
});

export default Setup;
