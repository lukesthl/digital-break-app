import { createThemeBuilder } from "@tamagui/theme-builder";
import {
  componentThemeDefinitions,
  maskOptions,
  masks,
  palettes,
  shadows,
  templates,
} from "@tamagui/themes";
import { darkColors, lightColors } from "./tokens";

export const themeTypes = ["light", "dark"] as const;

const colorThemeDefinition = (colorName: string) =>
  themeTypes.map((themeName) => ({
    parent: themeName,
    palette: colorName,
    template: themeName === "light" ? "colorLight" : "base",
  }));

const themesBuilder = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addMasks(masks)
  .addThemes({
    light: {
      template: "base",
      palette: "light",
      nonInheritedValues: {
        ...lightColors,
        ...shadows.light,
      },
    },
    dark: {
      template: "base",
      palette: "dark",
      nonInheritedValues: {
        ...darkColors,
        ...shadows.dark,
      },
    },
  })
  .addChildThemes({
    orange: colorThemeDefinition("orange"),
    yellow: colorThemeDefinition("yellow"),
    green: colorThemeDefinition("green"),
    blue: colorThemeDefinition("blue"),
    purple: colorThemeDefinition("purple"),
    pink: colorThemeDefinition("pink"),
    red: colorThemeDefinition("red"),
  })
  .addChildThemes({
    alt1: {
      mask: "soften",
      ...maskOptions.alt,
    },
    alt2: {
      mask: "soften2",
      ...maskOptions.alt,
    },
    active: {
      mask: "soften3",
      skip: {
        color: 1,
      },
    },
  })
  .addChildThemes(componentThemeDefinitions, {});

export const themes = themesBuilder.build();
