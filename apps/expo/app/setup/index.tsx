import { useEffect, useState } from "react";
import { SvgUri } from "react-native-svg";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { Button, H4, Input, Paragraph, SizableText, View, XStack, YStack } from "tamagui";

import { Container } from "../../components/container";
import { ShadowCard } from "../../components/shadow.card";
import { AppSettings } from "../../data/app.settings";

const Setup = observer(() => {
  const [apps, setApps] = useState<{ key: string; name: string }[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    void (async () => {
      const apps = (await (await fetch("https://lukesthl.github.io/digital-break-app/public/apps.json")).json()) as {
        key: string;
        name: string;
      }[];
      setApps(apps);
    })();
  }, []);
  return (
    <Container paddingVertical={"$4"}>
      <YStack space="$4">
        <>
          <H4 color="$text11">Select App</H4>
          <Paragraph color="$text11">First select an app that you setup a break for.</Paragraph>
        </>
        <Input
          size="$4"
          borderWidth={1}
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
          clearButtonMode="always"
        />
        <View flexDirection="row" flexWrap="wrap">
          {apps
            .filter((app) => app.name.toLowerCase().includes(search.toLowerCase()))
            .map((app, index) => (
              <View
                key={`${app.name}_${index}`}
                width="50%"
                paddingRight={index % 2 === 0 ? "$2" : 0}
                paddingLeft={index % 2 === 1 ? "$2" : 0}
                paddingBottom={index < apps.length - 2 ? "$3" : 0}
              >
                <ShadowCard
                  pressStyle={{ backgroundColor: "$grey1" }}
                  position="relative"
                  onPress={() => {
                    router.push(`/setup/steps?appName=${app.name}`);
                  }}
                >
                  <XStack space="$2" alignItems="center">
                    <SvgUri uri={AppSettings.getIconUrl(app.key)} width={20} height={20} key={app.key} />
                    <SizableText color="$text11" fontWeight={"900"} fontSize={"$5"}>
                      {app.name}
                    </SizableText>
                  </XStack>
                </ShadowCard>
              </View>
            ))}
          {apps.filter((app) => app.name.toLowerCase().includes(search.toLowerCase())).length === 0 && (
            <XStack space="$3" flexDirection="column" alignItems="center" flex={1}>
              <SizableText color="$text11" fontWeight={"900"} fontSize={"$5"}>
                App not found
              </SizableText>
              <SizableText color="$text11" fontSize={"$3"} textAlign="center" lineHeight={16}>
                Your app is not found in our database. Please contact us to add your app.
              </SizableText>
              <Button
                onPress={() => {
                  void Linking.openURL(
                    `mailto:luke@lukestahl.de?subject=${encodeURIComponent(
                      `Digital Break: App Request ${search}`
                    )}&body=${encodeURIComponent(`Please add ${search} to the app list. Thanks!`)}`
                  );
                }}
              >
                Mail us
              </Button>
            </XStack>
          )}
        </View>
      </YStack>
    </Container>
  );
});

export default Setup;
