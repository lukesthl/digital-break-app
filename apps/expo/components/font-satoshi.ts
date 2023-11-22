import type { FillInFont, GenericFont } from "@tamagui/core";
import { createFont, getVariableValue } from "@tamagui/core";

// fix type portability issue?
export type { GenericFont, FillInFont } from "@tamagui/core";

export const createSatoshiFont = <A extends GenericFont>(
  font: Partial<A> = {},
  {
    sizeLineHeight = (size) => size + 10,
    sizeSize = (size) => size * 1,
  }: {
    sizeLineHeight?: (fontSize: number) => number;
    sizeSize?: (size: number) => number;
  } = {}
): FillInFont<A, keyof typeof defaultSizes> => {
  const size = Object.fromEntries(
    Object.entries({
      ...defaultSizes,
      ...font.size,
    }).map(([k, v]) => [k, sizeSize(+v)])
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return createFont({
    family: "Satoshi",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    lineHeight: Object.fromEntries(Object.entries(size).map(([k, v]) => [k, sizeLineHeight(getVariableValue(v))])),
    weight: {
      4: "300",
    },
    letterSpacing: {
      4: 0,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(font as any),
    size,
  });
};

const defaultSizes = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134,
} as const;
