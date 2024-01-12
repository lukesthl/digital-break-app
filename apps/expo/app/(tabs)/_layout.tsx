import { Tabs } from "expo-router";
import { BarChart2, LayoutGrid } from "@tamagui/lucide-icons";
import { observer } from "mobx-react-lite";
import { SizableText } from "tamagui";

export const unstable_settings = {
  initialRouteName: "index",
};

const OverviewLayout = observer(() => {
  return (
    <Tabs screenOptions={{ tabBarStyle: { minHeight: 80 } }}>
      <Tabs.Screen
        name="overview"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <BarChart2 size={20} color={color} strokeWidth={focused ? 2.5 : undefined} style={{ marginTop: 8 }} />
          ),
          tabBarLabel: ({ color, focused, position }) => (
            <SizableText
              color={color}
              fontWeight={focused ? "bold" : undefined}
              lineHeight={16}
              {...(position === "beside-icon"
                ? {
                    textAlign: "center",
                    marginLeft: 20,
                    marginTop: "$2.5",
                  }
                : undefined)}
            >
              Overview
            </SizableText>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="apps"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <LayoutGrid size={20} color={color} strokeWidth={focused ? 2.5 : undefined} style={{ marginTop: 8 }} />
          ),
          tabBarLabel: ({ color, focused, position }) => (
            <SizableText
              color={color}
              fontWeight={focused ? "bold" : undefined}
              lineHeight={16}
              {...(position === "beside-icon"
                ? {
                    textAlign: "center",
                    marginLeft: 20,
                    marginTop: "$2.5",
                  }
                : undefined)}
            >
              Apps
            </SizableText>
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
});

export default OverviewLayout;
