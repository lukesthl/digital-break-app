import { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
import { ScrollView, View } from "tamagui";

export const Container = ({
  children,
  scroll = true,
  ...viewProps
}: { children: React.ReactNode } & React.ComponentProps<typeof View> & {
    scroll?: boolean;
    refreshControl?: React.ComponentProps<typeof ScrollView>["refreshControl"];
  }) => {
  const insets = useSafeAreaInsets();

  const tabBarHeight = useContext(BottomTabBarHeightContext);
  return scroll ? (
    <ScrollView
      paddingHorizontal="$4"
      paddingTop={insets.top}
      paddingBottom={tabBarHeight ?? insets.bottom}
      flex={1}
      minWidth={600}
      maxWidth={600}
      marginHorizontal="auto"
      {...(viewProps as React.ComponentProps<typeof ScrollView>)}
    >
      <View flex={1} paddingBottom={tabBarHeight ?? insets.bottom}>
        {children}
      </View>
    </ScrollView>
  ) : (
    <View
      paddingHorizontal="$4"
      paddingTop={insets.top}
      paddingBottom={tabBarHeight ?? insets.bottom}
      flex={1}
      marginHorizontal="auto"
      maxWidth={600}
      {...viewProps}
    >
      <View flex={1} paddingBottom={tabBarHeight ?? insets.bottom}>
        {children}
      </View>
    </View>
  );
};
