import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  purple,
  purpleDark,
  radius,
  red,
  redDark,
  size,
  space,
  yellow,
  yellowDark,
  zIndex,
} from "@tamagui/themes";
import type { Variable } from "@tamagui/web";
import { createTokens } from "@tamagui/web";

import { colors } from "./colors";

export const colorTokens = {
  light: {
    primary: colors.primary.light,
    text: colors.text.light,
    background: colors.background.light,
    blue,
    gray,
    green,
    orange,
    pink,
    purple,
    red,
    yellow,
  },
  dark: {
    primary: colors.primary.dark,
    text: colors.text.dark,
    background: colors.background.dark,
    blue: blueDark,
    gray: grayDark,
    green: greenDark,
    orange: orangeDark,
    pink: pinkDark,
    purple: purpleDark,
    red: redDark,
    yellow: yellowDark,
  },
};

export const darkColors = {
  ...colorTokens.dark.primary,
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow,
  ...colorTokens.dark.text,
  ...colorTokens.dark.background,
};

export const lightColors = {
  ...colorTokens.light.primary,
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow,
  ...colorTokens.light.text,
  ...colorTokens.light.background,
};

export const color = {
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark"),
};

export const tokens = createTokens({
  color,
  radius,
  zIndex,
  space,
  size,

  // testing
  icon: {
    sm: 16,
    md: 24,
    lg: 32,
  },
});

function postfixObjKeys<A extends Record<string, Variable<string> | string>, B extends string>(
  obj: A,
  postfix: B
): {
  [Key in `${keyof A extends string ? keyof A : never}${B}`]: Variable<string> | string;
} {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v])) as any;
}
