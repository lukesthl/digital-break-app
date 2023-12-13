import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import { makeAutoObservable } from "mobx";

import * as ExpoExitApp from "../../../packages/expo-exit-app";
import { AppStatisticsStore } from "./app.statistics";
import type { App } from "./apps";
import { AppsStore, deepLinks } from "./apps";

const isRunningInExpoGo = Constants.appOwnership === AppOwnership.Expo;

export class BreakStoreSingleton {
  private appStatisticsStore = new AppStatisticsStore();

  private appsStore = new AppsStore();

  private _app: App | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public async init({ appShortcutName }: { appShortcutName: string }) {
    const app = await this.appsStore.getOrCreateApp({ appShortcutName });
    this.app = app;
    void this.appStatisticsStore.trackEvent({ appId: app.id, type: "break-start" });
  }

  public async openApp(): Promise<void> {
    if (!this.app) {
      throw new Error("App not initialized");
    }
    await this.appStatisticsStore.trackEvent({ appId: this.app.id, type: "app-reopen" });
    await Linking.openURL(deepLinks[this.app.key]);
  }

  public async exitApp(): Promise<void> {
    if (!this.app || isRunningInExpoGo) {
      throw new Error("App not initialized");
    }
    await this.appStatisticsStore.trackEvent({ appId: this.app.id, type: "app-close" });
    ExpoExitApp.exit();
  }

  public get app(): App | null {
    return this._app;
  }
  public set app(value: App | null) {
    this._app = value;
  }
}

export const BreakStore = new BreakStoreSingleton();
