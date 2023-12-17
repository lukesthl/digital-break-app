import { makeAutoObservable } from "mobx";

import { AppStatisticsStore } from "./app.statistics";
import { AppsStore } from "./apps";

class SettingsStoreSingleton {
  private appStatisticsStore = new AppStatisticsStore();

  private appsStore = new AppsStore();

  constructor() {
    makeAutoObservable(this);
  }

  public async generateRandomTestData() {
    try {
      await this.appsStore.getOrCreateApp({
        appShortcutName: "Instagram",
      });
      await this.appsStore.getOrCreateApp({
        appShortcutName: "Facebook",
      });
      await this.appsStore.getOrCreateApp({
        appShortcutName: "Twitter",
      });
      await this.appsStore.getOrCreateApp({
        appShortcutName: "YouTube",
      });
      await this.appsStore.getOrCreateApp({
        appShortcutName: "TikTok",
      });
      for (const app of this.appsStore.apps) {
        for (let i = 0; i < 100; i++) {
          const eventTypes = ["break-start", "app-reopen", "app-close"] as const;

          const timestamp = Date.now() - Math.floor(Math.random() * 14 * 24 * 60 * 60 * 1000); // 14 days

          const type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
          if (!type) {
            throw new Error("No type");
          }
          if (type === "app-reopen" || type === "app-close") {
            await this.appStatisticsStore.trackEvent({
              appId: app.id,
              type: "break-start",
              timestamp: timestamp - 2000,
            }); // 2 seconds before
          }
          const appId = app.id;
          await this.appStatisticsStore.trackEvent({ appId, type, timestamp });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const SettingsStore = new SettingsStoreSingleton();
