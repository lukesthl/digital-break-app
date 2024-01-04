import * as Linking from "expo-linking";
import { router, useLocalSearchParams } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { observer } from "mobx-react-lite";
import { Button, H4, Paragraph, Text, View, XStack, YStack } from "tamagui";

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
            <View marginTop={"$1.5"}>
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
                2
              </Text>
            </View>
            <View marginTop={"$1.5"}>
              <H4 color="$text11" lineHeight={20}>
                Open the Shortcut app
              </H4>
              <Paragraph color="$text11">Go to Automations and create a new automation via the + button.</Paragraph>
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
            <View marginTop={"$1.5"}>
              <H4 color="$text11" lineHeight={20}>
                Select &quot;App&quot;-Trigger
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
            <View marginTop={"$1.5"}>
              <H4 color="$text11" lineHeight={20}>
                Configure the trigger
              </H4>
              <Paragraph color="$text11">Select &quot;Choose&quot; and search for the app you want to use.</Paragraph>
              <Paragraph color="$text11">Info: You need to create a trigger for every app you want to use.</Paragraph>
              <Paragraph color="$text11">Select &quot;open directly&quot;</Paragraph>
              <Paragraph color="$text11">Select &quot;Next&quot; when you are done.</Paragraph>
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
            <View marginTop={"$1.5"}>
              <H4 color="$text11" lineHeight={22}>
                Select &quot;digital break&quot; as the action
              </H4>
              <Paragraph color="$text11">Search for &quot;digital break&quot; and select it.</Paragraph>
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
            <View marginTop={"$1.5"}>
              <H4 color="$text11" lineHeight={20}>
                Replace the default app
              </H4>
              <Paragraph color="$text11">
                Replace the default app with the app you want to use. (e.g. Instagram)
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
                7
              </Text>
            </View>
            <View marginTop={"$1.5"}>
              <H4 color="$text11" lineHeight={24}>
                Congrats 🎉
              </H4>
              <Paragraph color="$text11">You are all set. Now you can try to open the app you selected.</Paragraph>
              <Paragraph color="$text11">
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
          <Text fontWeight={"600"}>Done</Text>
        </Button>
      </YStack>
    </Container>
  );
});

export default Setup;
