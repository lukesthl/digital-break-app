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

export const primary = {
  primary1: "hsl(206, 100%, 99.2%)",
  primary2: "hsl(210, 100%, 98.0%)",
  primary3: "hsl(209, 100%, 96.5%)",
  primary4: "hsl(210, 98.8%, 94.0%)",
  primary5: "hsl(209, 95.0%, 90.1%)",
  primary6: "hsl(209, 81.2%, 84.5%)",
  primary7: "hsl(208, 77.5%, 76.9%)",
  primary8: "hsl(206, 81.9%, 65.3%)",
  primary9: "hsl(206, 100%, 50.0%)",
  primary10: "hsl(208, 100%, 47.3%)",
  primary11: "hsl(211, 100%, 43.2%)",
  primary12: "hsl(211, 100%, 15.0%)",
};

export const primaryDark = {
  primary1: "hsl(206, 100%, 99.2%)",
  primary2: "hsl(210, 100%, 98.0%)",
  primary3: "hsl(209, 100%, 96.5%)",
  primary4: "hsl(210, 98.8%, 94.0%)",
  primary5: "hsl(209, 95.0%, 90.1%)",
  primary6: "hsl(209, 81.2%, 84.5%)",
  primary7: "hsl(208, 77.5%, 76.9%)",
  primary8: "hsl(206, 81.9%, 65.3%)",
  primary9: "hsl(206, 100%, 50.0%)",
  primary10: "hsl(208, 100%, 47.3%)",
  primary11: "hsl(211, 100%, 43.2%)",
  primary12: "hsl(211, 100%, 15.0%)",
};

export const colorTokens = {
  light: {
    primary,
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
    primary: primaryDark,
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
