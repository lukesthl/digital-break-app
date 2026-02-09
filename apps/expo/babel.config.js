module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // NOTE: this is optional, you don't *need* the compiler
      [
        "@tamagui/babel-plugin",
        {
          components: [
            "tamagui",
            "@tamagui-extras/core",
            "@tamagui-extras/form",
          ],
          config: "./tamagui.config.ts",
          logTimings: true,
        },
      ],
      // NOTE: reanimated plugin removed - auto-configured by babel-preset-expo in SDK 54+
    ],
  };
};
