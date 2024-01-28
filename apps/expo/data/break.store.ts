import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { makeAutoObservable } from "mobx";

import * as ExpoExitApp from "../../../packages/expo-exit-app";
import { AppStatisticsStore } from "./app.statistics";
import type { App } from "./apps";
import { AppsStore, deepLinks } from "./apps";
import { SettingsStore } from "./settings.store";
import { ShortCutPayload } from "./shortcut.payload";

const isRunningInExpoGo = Constants.appOwnership === AppOwnership.Expo;

const funnyBreakMessages = [
  "Feeling the breathless media chase? Pause, Breathe. Repeat.",
  "And now, for your regularly scheduled deep breath...",
  "Alert: Your screen says it misses your blinking. Time for a breather!",
  "Time for a Scroll-Free Serenity minute! Don't worry, the memes will be there when you get back.",
  "Your screen says: 'We need a little time apart... to breathe!'",
  "Reality check: Did you breathe today?",
  "Time for a commercial break: Brought to you by Your Well-being.",
  "Your reward for winning our 'Scroller of the Year'? A mindful break!",
  "Surprise! You've unlocked a secret level: 'The Land of Breaths and Blinks'. Enjoy!",
  "One small pause for a man, one giant relief for mankind's wall-posting addiction.",
  "Incoming call from: Relaxation. Will you accept the call?",
  "Time for a sponsored message from Oxygen: 'Breathe in, Breathe out!'",
  "Alert: You've reached the end of the internet! Just kidding, but let's take a short break.",
  "Inhale the calm, exhale the tweets.",
  "Remember, even the internet needs a coffee break.",
  "Deep breath in, and let go of that urge to scroll.",
  "Pause and reflect: Have you hydrated today?",
  "In through the nose, out through the mouth, far away from the memes.",
  "Take a moment... Your feed will still be there in a breath's time.",
  "Relax, there's more to life than the next viral video.",
  "Hold on, let's just be here, not on a timeline.",
  "Breathe in peace, breathe out hashtags.",
  "A deep breath is like a mini-break for your brain. Ready, set, relax!",
  "Take a breath; your next 'like' can wait.",
  "Pause. Breathe. Remember: every cat video is better after a deep breath.",
  "You're not missing out – you're just breathing in.",
  "A breath a day keeps the FOMO at bay.",
  "Ready for a 'Digital Break'? Inhale, exhale, and forget those tabs for a second!",
  "With 'Digital Break', every breath is a step back from the digital rush.",
];

export class BreakStoreSingleton {
  private appStatisticsStore = new AppStatisticsStore();

  private appsStore = new AppsStore();

  private lastBreakTimestamp = Date.now();

  private _status: "running" | "finished" | null = null;

  private _app: App | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public async init({ appShortcutName, timestamp }: { appShortcutName: string; timestamp: number }) {
    this.status = null;
    const [app] = await Promise.all([this.appsStore.getOrCreateApp({ appShortcutName }), SettingsStore.init()]);
    this.app = app;
    if (timestamp !== this.lastBreakTimestamp) {
      this.lastBreakTimestamp = timestamp;
      void this.appStatisticsStore.trackEvent({ appId: app.id, type: "break-start" });
    }
  }

  public async openApp(): Promise<void> {
    if (!this.app) {
      throw new Error("App not initialized");
    }
    await this.appStatisticsStore.trackEvent({ appId: this.app.id, type: "app-reopen" });
    await ShortCutPayload.update(this.app.key, "app-reopen");
    await new Promise((resolve) => setTimeout(resolve, 500)); // app intent isnt fast enough
    this.status = null;
    await Linking.openURL(deepLinks[this.app.key as keyof typeof deepLinks]).catch(() => {
      throw new Error("Failed to open app. Are you sure it's installed?");
    });
    router.replace("/");
  }

  public async exitApp(): Promise<void> {
    if (!this.app || isRunningInExpoGo) {
      throw new Error("App not initialized");
    }
    await this.appStatisticsStore.trackEvent({ appId: this.app.id, type: "app-close" });
    await ShortCutPayload.clear();
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

  public get status(): "running" | "finished" | null {
    return this._status;
  }
  public set status(value: "running" | "finished" | null) {
    this._status = value;
  }
}

export const BreakStore = new BreakStoreSingleton();
