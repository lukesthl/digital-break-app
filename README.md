# Digital Break - Screen Time Focus

Take control of your screen time with Digital Break - a app designed to introduce a break before you dive into your social media apps.

<p align="center">
  <a href="#about-the-project"><strong>About The Project</strong></a> ·
  <a href="#key-features"><strong>Key Features</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## About The Project

<p align="left">
  <video src="https://lukesthl.github.io/digital-break-app/public/digital-break-preview.mp4"></video>
</p>
 App Store: [Digital Break on the App Store](https://apps.apple.com/de/app/digitalbreak-screentime-focus/id6474795966) 
📱 Play Store: **not supported**

## Key Features

- **App Blocking**: Personalize your experience by choosing which apps and websites trigger a pause.
- **Progress Tracking**: Monitor your digital well-being with analytics on usage patterns.
- **Privacy-First**: Operates without collecting personal data, ensuring your privacy.

## Getting Started

Start by cloning the repository and installing the dependencies.

1. Install the dependencies

```sh
bun i
```

2. Install app and run dev-client

```sh
bun run ios
```

## Tech Stack

###

- [Expo](https://expo.dev/) with [Expo Config Plugins](https://docs.expo.dev/guides/config-plugins/)
- [React Native](https://reactnative.dev/)
- [Tamagui](tamagui.dev)
- [Bun](https://bun.sh/)

Monorepo structure:

```
├── apps
│   ├── expo (App)
│   │   ├── ...
├── packages
│   ├── shortcuts-generator
│   ├── expo-exit-app
│   ├── target-plugin
```

### About the packages

- **shortcuts-generator**: Generates shortcuts for the defined [apps.json](/public/apps.json) via the [shortuctu.template.plist](/public/shortcut.template.plist) and signs them with `shortcuts sign` command.
- **expo-exit-app**: A simple package to exit the app. It's used to close the app when the user presses the "I don't want to open xxx app" button.
- **target-plugin**: The Plugin for setting up the iOS AppIntent target [DigitalBreak.swift](/apps/expo/targets/intents/DigitalBreak.swift)

## Architecture

<img src="https://lukesthl.github.io/digital-break-app/public/architecture.png">

The app uses the [AppIntent](https://developer.apple.com/documentation/appintents) framework to intercept the app opening event.  
When the user opens an app that is defined in the [apps.json](/public/apps.json) the app will intercept the event and displays a break screen. When break is over the user can decide to open the app via the defined url scheme or close the app.

## CI/CD

The project is build locally with Github Actions. Uploaded as an artifact and then automatically uploaded via Expo auto submit to the App Store.  
Thankfully, Github Actions now allows M1 Macs to be used for the build process.

## Ideas

- [ ] Android Support
- [ ] Multi Language Support
- [ ] Customizable Breaks

## License

This project is licensed under the MIT License - see the LICENSE file for details.
