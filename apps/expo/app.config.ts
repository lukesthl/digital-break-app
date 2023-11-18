import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "digitalbreak",
  slug: "digitalbreak",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    usesAppleSignIn: true,
    bundleIdentifier: "com.lukesthl.digitalbreak",
    googleServicesFile: process.env.GOOGLE_SERVICES_FILE,
    associatedDomains: [process.env.ASSOCIATED_DOMAIN ?? ""],
    infoPlist: {
      CFBundleURLTypes: [
        {
          CFBundleURLSchemes: [process.env.GOOGLE_SIGNIN_IOS_CLIENT_ID],
        },
      ],
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    permissions: ["android.permission.RECORD_AUDIO"],
    googleServicesFile: "./google-services.json",
  },
  web: {
    bundler: "metro",
    // output: 'static',
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    "expo-apple-authentication",
    "@react-native-google-signin/google-signin",
    [
      "expo-image-picker",
      {
        photosPermission: "The app accesses your photos to let you share them with your friends.",
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
      projectId: "fb88c696-3171-471e-a8e2-fb4ac671b225",
    },
  },
});
