import { Vibration } from "react-native";
import Constants, { AppOwnership } from "expo-constants";
import * as Haptics from "expo-haptics";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { makeAutoObservable } from "mobx";

import * as ExpoExitApp from "../../../packages/expo-exit-app";
import { AppStatisticsStore } from "./app.statistics";
import type { App } from "./apps";
import { AppsStore, deepLinks } from "./apps";
import { clearOpenedApp, updateOpenedApp } from "./shortcut.listener";

const isRunningInExpoGo = Constants.appOwnership === AppOwnership.Expo;

const funnyBreakMessages = [
  "Screen break alert: Don't scroll, just stroll!",
  "Feeling the breathless media chase? Pause, Breathe. Repeat.",
  "And now, for your regularly scheduled deep breath...",
  "ScreenDetox Alert: Inhale the good stuff, exhale the bad stuff, and hit play!",
  "Alert: Your screen says it misses your blinking. Time for a breather!",
  "Congratulations! You’ve earned a serene moment. Please collect your tranquility now.",
  "Time for a Scroll-Free Serenity minute! Don't worry, the memes will be there when you get back.",
  "Your screen says: 'We need a little time apart... to breathe!'",
  "Reality check: Did you breathe today?",
  "Time for a commercial break: Brought to you by Your Well-being.",
  "Did you know humans have to blink AND breathe? Weird, right? Time for both!",
  "Your reward for winning our 'Scroller of the Year'? A mindful break!",
  "Surprise! You've unlocked a secret level: 'The Land of Breaths and Blinks'. Enjoy!",
  "One small pause for a man, one giant relief for mankind's wall-posting addiction.",
  "Incoming call from: Relaxation. Will you accept the call?",
  "Time for a sponsored message from Oxygen: 'Breathe in, Breathe out!'",
  "Alert: You've reached the end of the internet! Just kidding, but let's take a short break.",
];

export class BreakStoreSingleton {
  private appStatisticsStore = new AppStatisticsStore();

  private appsStore = new AppsStore();

  private lastBreakTimestamp = Date.now();

  private _app: App | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public async init({ appShortcutName, timestamp }: { appShortcutName: string; timestamp: number }) {
    const app = await this.appsStore.getOrCreateApp({ appShortcutName });
    this.app = app;
    if (timestamp !== this.lastBreakTimestamp) {
      this.lastBreakTimestamp = timestamp;
      void this.appStatisticsStore.trackEvent({ appId: app.id, type: "break-start" });
    }
    //  void this.hapticImpact();
  }
  private getHapticImpactEnum = (impact: string): Haptics.ImpactFeedbackStyle | undefined => {
    switch (impact) {
      case "heavy":
        return Haptics.ImpactFeedbackStyle.Heavy;
      case "medium":
        return Haptics.ImpactFeedbackStyle.Medium;
      case "light":
        return Haptics.ImpactFeedbackStyle.Light;
    }
  };

  public async hapticImpact(): Promise<void> {
    const pattern: ("light" | "medium" | "heavy" | "vibrate" | number)[] = [];
    const duration = this.app?.settings.breakDurationSeconds ?? 0;
    const durationInMs = duration * 1;
    for (let i = 0; i < durationInMs; ++i) {
      if (i < duration / 2) {
        pattern.push("light");
      } else {
        pattern.push("medium");
      }
      pattern.push(100);
    }
    console.log("Haptic pattern", pattern);
    for (let i = 0; i < pattern.length; ++i) {
      const e = pattern[i];
      if (i % 2 === 0) {
        // Vibration length, always 400 for iOS
        if (typeof e === "number") {
          Vibration.vibrate(e);
          await new Promise((res) => setTimeout(res, e));
          // Default
        } else if (e === "vibrate" || !e) {
          Vibration.vibrate();
          // Use native impact type
        } else {
          console.log("Haptic impact", e);
          await Haptics.impactAsync(this.getHapticImpactEnum(e) ?? Haptics.ImpactFeedbackStyle.Medium);
        }
        // Await for the pause
      } else {
        if (typeof e !== "number") return;
        await new Promise((res) => setTimeout(res, e));
      }
    }
  }

  public async openApp(): Promise<void> {
    if (!this.app) {
      throw new Error("App not initialized");
    }
    await this.appStatisticsStore.trackEvent({ appId: this.app.id, type: "app-reopen" });
    await updateOpenedApp(this.app.key, "app-reopen");
    await new Promise((resolve) => setTimeout(resolve, 500));
    // await AsyncStorage.setItem("openedApp", `${this.app.key}_${Date.now()}_app-reopen`);
    await Linking.openURL(deepLinks[this.app.key as keyof typeof deepLinks]);
    router.replace("/");
  }

  public async exitApp(): Promise<void> {
    if (!this.app || isRunningInExpoGo) {
      throw new Error("App not initialized");
    }
    await this.appStatisticsStore.trackEvent({ appId: this.app.id, type: "app-close" });
    // await AsyncStorage.setItem("openedApp", `${this.app.key}_${Date.now()}_app-reopen`);
    await clearOpenedApp();
    ExpoExitApp.exit();
  }

  public getRandomBreakMessage(): string {
    return funnyBreakMessages[Math.floor(Math.random() * funnyBreakMessages.length)]!;
  }

  public get app(): App | null {
    return this._app;
  }
  public set app(value: App | null) {
    this._app = value;
  }
}

export const BreakStore = new BreakStoreSingleton();
