import { useContext, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
import { ScrollView, View } from "tamagui";

export const Container = ({
  children,
  scroll = true,
  header,
  ...viewProps
}: {
  children: React.ReactNode;
  header?: ({ isSticky }: { isSticky: boolean }) => React.ReactNode;
} & React.ComponentProps<typeof View> & {
    scroll?: boolean;
    refreshControl?: React.ComponentProps<typeof ScrollView>["refreshControl"];
  }) => {
  const [isSticky, setIsSticky] = useState(false);
  const insets = useSafeAreaInsets();

  const tabBarHeight = useContext(BottomTabBarHeightContext);
  return scroll ? (
    <ScrollView
      paddingTop={!header ? insets.top : undefined}
      paddingBottom={tabBarHeight && insets.bottom ? tabBarHeight - insets.bottom : tabBarHeight ?? insets.bottom}
      showsVerticalScrollIndicator={false}
      flex={1}
      $gtSm={{
        minWidth: 600,
        marginHorizontal: "auto",
        maxWidth: 600,
      }}
      scrollEventThrottle={16}
      onScroll={(event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        setIsSticky(offsetY >= 5);
      }}
      stickyHeaderIndices={header ? [0] : undefined}
      {...(viewProps as React.ComponentProps<typeof ScrollView>)}
    >
      {header && header({ isSticky })}
      <View
        flex={1}
        paddingBottom={tabBarHeight && insets.bottom ? tabBarHeight - insets.bottom : tabBarHeight ?? insets.bottom}
        paddingHorizontal={"$4"}
      >
        {children}
      </View>
    </ScrollView>
  ) : (
    <View
      paddingHorizontal="$4"
      paddingTop={insets.top}
      paddingBottom={tabBarHeight ?? insets.bottom}
      flex={1}
      $gtSm={{
        marginHorizontal: "auto",
        maxWidth: 600,
      }}
      {...viewProps}
    >
      <View flex={1} paddingBottom={tabBarHeight ?? insets.bottom}>
        {children}
      </View>
    </View>
  );
};
