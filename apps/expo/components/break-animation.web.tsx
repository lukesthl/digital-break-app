import { Animated, View } from "react-native";

export const BreakAnimation = ({ progress }: { progress: Animated.Value }) => (
  <View
    style={{
      height: 250,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Animated.View
      style={{
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#57C7D4",
        opacity: progress.interpolate({
          inputRange: [0, 0.65, 1],
          outputRange: [0.45, 1, 0.7],
        }),
        transform: [
          {
            scale: progress.interpolate({
              inputRange: [0, 0.65, 1],
              outputRange: [0.75, 1.1, 0.9],
            }),
          },
        ],
      }}
    />
  </View>
);
