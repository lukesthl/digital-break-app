import { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
import { ScrollView, View } from "tamagui";

export const Container = ({
  children,
  ...viewProps
}: { children: React.ReactNode } & React.ComponentProps<typeof ScrollView>) => {
  const insets = useSafeAreaInsets();

  const tabBarHeight = useContext(BottomTabBarHeightContext);
  return (
    <ScrollView
      paddingHorizontal="$4"
      paddingTop={insets.top}
      paddingBottom={tabBarHeight ?? insets.bottom}
      {...viewProps}
    >
      <View flex={1} paddingBottom={tabBarHeight ?? insets.bottom}>
        {children}
      </View>
    </ScrollView>
  );
};
