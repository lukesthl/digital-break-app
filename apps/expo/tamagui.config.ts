import { createAnimations } from "@tamagui/animations-react-native";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createTamagui } from "tamagui";

import { createSatoshiFont } from "./components/font-satoshi";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});
const headingFont = createSatoshiFont({ family: "SatoshiBlack" });
const bodyFont = createSatoshiFont({
  family: "Satoshi",
  face: {
    bold: { normal: "SatoshiBold" },
    normal: { normal: "Satoshi" },
    300: { normal: "Satoshi" },
    500: { normal: "Satoshi" },
    600: { normal: "SatoshiBold" },
    700: { normal: "SatoshiBold" },
    800: { normal: "SatoshiBlack" },
    900: { normal: "SatoshiBlack" },
  },
});
const config = createTamagui({
  animations,
  defaultTheme: "light",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    ...themes,
    light_Button: {
      background: "#232323",
      backgroundFocus: "#424242",
      backgroundHover: "#282828",
      backgroundPress: "#323232",
      backgroundStrong: "#191919",
      backgroundTransparent: "#151515",
      color: "#fff",
      colorFocus: "#a5a5a5",
      colorHover: "#a5a5a5",
      colorPress: "#fff",
      colorTransparent: "#a5a5a5",
      placeholderColor: "#424242",
    },
    light_Input: {
      ...themes.light_Input,
      background: "#fff",
      borderColor: "#cccccc",
      borderColorFocus: "#a5a5a5",
    },
    light_Checkbox: {
      borderColor: "#cccccc",
      background: "#fff",
    },
  },
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
});
export type AppConfig = typeof config;
declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types

  // work everywhere you import `tamagui`

  type TamaguiCustomConfig = AppConfig;
}
export default config;
