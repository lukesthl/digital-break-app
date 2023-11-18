import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, View } from "tamagui";

export const Container = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <ScrollView paddingHorizontal="$4" paddingTop={insets.top} paddingBottom={tabBarHeight}>
      <View flex={1} paddingBottom={tabBarHeight}>
        {children}
      </View>
    </ScrollView>
  );
};
