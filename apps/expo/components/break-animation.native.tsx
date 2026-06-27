import { Animated } from "react-native";
import type { ComponentType } from "react";
import type { AnimationObject } from "lottie-react-native";
import LottieView from "lottie-react-native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView as ComponentType<any>);

export const BreakAnimation = ({ progress }: { progress: Animated.Value }) => (
  <AnimatedLottieView
    progress={progress}
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    source={require("../assets/water-drop-animation.json") as AnimationObject}
    style={{
      height: 300,
      width: "100%",
      marginBottom: -50,
    }}
  />
);
