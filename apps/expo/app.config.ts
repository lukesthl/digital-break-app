import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Digital Break",
  slug: "digitalbreak",
  version: "1.0.2",
  orientation: "portrait",
  icon: "./assets/images/default.png",
  scheme: "digitalbreak",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/digital-break-hourglass-icon.png",
    resizeMode: "contain",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.lukesthl.digitalbreak",
    config: {
      usesNonExemptEncryption: false,
    },
  },
  web: {
    bundler: "metro",
    // output: 'static',
  },
  plugins: [
    "expo-router",
    "expo-localization",
    [
      "expo-dynamic-app-icon",
      {
        default: {
          image: "./assets/images/default.png",
          prerendered: true,
        },
        light: {
          image: "./assets/images/light.png",
          prerendered: true,
        },
        dark: {
          image: "./assets/images/dark.png",
          prerendered: true,
        },
      },
    ],
    [
      "expo-build-properties",
      {
        ios: {
          deploymentTarget: "16.0",
        },
      },
    ],
    [
      "./app.plugin",
      {
        appleTeamId: "3X5J8LXMDM",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: "4fb26108-8286-4f78-b25f-1c10a7c6e82b",
    },
  },
});
