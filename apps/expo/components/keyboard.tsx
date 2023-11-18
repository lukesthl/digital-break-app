import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Constants, { AppOwnership } from "expo-constants";
import { useFocusEffect } from "@react-navigation/native";
import { View } from "tamagui";

const isRunningInExpoGo = Constants.appOwnership === AppOwnership.Expo;

/**
 *  This hook should be used in every screen that has a form input field to avoid the keyboard
 *  This is not a one for all solution, if you want more customization please refer to those examples: https://mateusz1913.github.io/react-native-avoid-softinput/docs/recipes/recipes-form
 */

export const useSoftKeyboardEffect = () => {
  if (isRunningInExpoGo) return;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useFocusEffect(() => {
    const reactNativeAvoidSoftinput =
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("react-native-avoid-softinput") as typeof import("react-native-avoid-softinput");
    const { AvoidSoftInput } = reactNativeAvoidSoftinput;
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    // AvoidSoftInput.setAvoidOffset(30);
    AvoidSoftInput.setShowAnimationDelay(0);
    AvoidSoftInput.setShowAnimationDuration(150);
    AvoidSoftInput.setHideAnimationDuration(150);
    AvoidSoftInput.setHideAnimationDelay(0);
    return () => {
      AvoidSoftInput.setAvoidOffset(0);
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  });
};

export const DismissKeyboard = ({ children }: { children: JSX.Element }) => (
  <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}
    accessible={false}
  >
    <View style={{ flex: 1 }}>{children}</View>
  </TouchableWithoutFeedback>
);
