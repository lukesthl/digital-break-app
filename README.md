<p align="center" style="display:flex; justify-content:center; align-items:center">
      <img src="./docs/expo-logo.svg" height="56" style="margin-right:4px"><img src="./docs/supertokens-logo.png" height="64">
</p>

# React Native Expo Template with Supertokens Authentication

This project template provides a starting point for developing a React Native application with Expo and Supertokens to authenticate. It includes prebuilt screens for various authentication functionalities such as sign in, sign up, change password, change email, delete account, and forgot password.

## Demo

Sign in with Email and Password:

<div float="left">
  <img src="./docs/signin-with-email-example.gif" height="300">
</div>

Sign in with Github:

<div float="left">
  <img src="./docs/signin-with-github-example.gif" height="300">
</div>

## Key Features:

- [**Sign in with Apple, GitHub, Google, or Email and Password**](https://supertokens.com/docs/thirdpartyemailpassword/introduction): The authentication flow supports multiple sign-in options using Supertokens.
- [**Role Management**](https://supertokens.com/docs/userroles/introduction): You can manage user roles and permissions within your application using Supertokens.
- **Internationalization**: It includes built-in support for internationalization with typesafe i18next.
- [**Deep Linking**](https://docs.expo.dev/guides/deep-linking/): Connect your app to a website by adding support for deep linking.
- [**Expo Router v2**](https://docs.expo.dev/routing/introduction/): It utilizes Expo Router, a versatile routing solution for navigating between screens in your application.
- [**Tamagui**](https://tamagui.dev/): You can leverage the Tamagui library within this template to enhance the UI and user experience of your React Native app.
- [**mobx**](https://mobx.js.org/README.html): It uses mobx for state management.
- **iOS Support**: The template ensures compatibility and support for iOS devices.

## Getting Started

To use this template, follow the steps below:

1. Clone the repository  
   `git clone https://github.com/lukesthl/supertokens-expo-template`
2. Install dependencies  
   `pnpm install`
3. Configure the Supertokens Backend with your authentication providers (Apple, GitHub, Google, etc.)
   <br> [**Backend Setup Guide**](./apps/api/README.md)
4. Setup environment variables:

- `cp ./apps/expo/.env.example ./apps/expo/.env`
- Update the necessary environment variables for Supertokens configuration. For example:

  ```
  EXPO_PUBLIC_API_URL=<your-api-url>
  EXPO_PUBLIC_GITHUB_CLIENT_ID=<your-github-client-id>
  ASSOCIATED_DOMAIN=<applinks:your-api-url> // for deep linking (without https://)
  GOOGLE_SERVICES_FILE=<path-to-google-services.json>
  GOOGLE_SIGNIN_IOS_CLIENT_ID=<your-google-signin-ios-client-id>
  ```

5. `cd apps/expo`
6. EAS Configure  
   `eas build:configure`
7. Setup the secrets needed in app.config.ts in Expo's Website  
   https://expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/secrets
8. EAS Build Setup (Simulator)  
   `eas build -p ios --profile simulator`
9. Select the simulator build and install it on the simulator  
   `eas build:run`
10. Start Expo Dev Client  
    `cd ../../ && pnpm native`

### Customizing the Prebuilt Screens

The template comes with prebuilt screens for various authentication functionalities. You can customize these screens based on your application's branding and design requirements. The relevant files can be found in the `/apps/expo/app/(app)/auth` directory.

### Known Issues

- expo router deep link broken when app is running in foreground: https://github.com/expo/router/issues/818

### Folder Structure

The main apps are:

`apps` (root)

- `expo` (native)
- `api` (backend)

`packages` shared packages across apps (when ui is shared in the future, it will be here)

## Roadmap

- [ ] Add support for Android devices (Deep Linking, Sign in with Apple, etc.)
- [ ] Add support for Expo Web
- [ ] Support account linking

## Learn more

- [Supertokens Documentation](https://supertokens.io/docs/)
- [Expo Documentation](https://docs.expo.dev/)
- [Tamagui Library](https://tamagui.org/)
