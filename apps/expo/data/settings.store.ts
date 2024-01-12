import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable } from "mobx";

import { AppStatisticsStore } from "./app.statistics";
import { AppsStore } from "./apps";

class SettingsStoreSingleton {
  private appStatisticsStore = new AppStatisticsStore();

  private appsStore = new AppsStore();

  private _hapticsEnabled = true;

  constructor() {
    makeAutoObservable(this);
  }

  public async init() {
    const hapticsEnabled = await AsyncStorage.getItem("hapticsEnabled");
    if (hapticsEnabled === "false") {
      this.hapticsEnabled = false;
    }
  }

  public async setHapticsEnabled(enabled: boolean) {
    this.hapticsEnabled = enabled;
    await AsyncStorage.setItem("hapticsEnabled", enabled.toString());
  }

  public async importData(): Promise<void> {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: "application/json" });
      if (!result.canceled && result.assets.length > 0) {
        const [file] = result.assets;
        if (!file) {
          throw new Error("No file uri");
        }
        const fileContents = await FileSystem.readAsStringAsync(file.uri);
        const data = JSON.parse(fileContents) as {
          apps: AppsStore["apps"];
          appStatistics: AppStatisticsStore["events"];
        };
        await Promise.all([
          this.appsStore.importApps(data.apps),
          this.appStatisticsStore.importEvents(data.appStatistics),
        ]);
      } else {
        throw new Error("No file selected");
      }
    } catch (err) {
      console.error("Error reading JSON file", err);
    }
  }

  public async generateExportFile(): Promise<string | undefined> {
    const fileName = "digital-break-app.export.json";
    const fileUri = FileSystem.documentDirectory + fileName;
    await Promise.all([this.appsStore.init(), this.appStatisticsStore.init()]);
    const jsonData = JSON.stringify({
      apps: this.appsStore.apps,
      appStatistics: this.appStatisticsStore.events,
    });
    try {
      await FileSystem.writeAsStringAsync(fileUri, jsonData);
      console.log("File saved successfully!");
      return fileUri;
    } catch (error) {
      console.error("Error creating JSON file", error);
    }
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

  public get hapticsEnabled() {
    return this._hapticsEnabled;
  }
  public set hapticsEnabled(value) {
    this._hapticsEnabled = value;
  }
}

export const SettingsStore = new SettingsStoreSingleton();
