import * as FileSystem from "expo-file-system";

import { appConfig } from "../constants/app.config";

class ShortCutPayloadSingleton {
  private readonly storageKey = "openedApp";
  private pathSplitted = FileSystem.documentDirectory?.split("/");
  private appPath = this.pathSplitted?.slice(0, this.pathSplitted.length - 2).join("/");
  private dataPath = `${this.appPath}/Library/Application Support/${appConfig.bundleIdentifier}/RCTAsyncLocalStorage_V1/appintent.json`;

  private loadAppIntentPayload = async (): Promise<Record<string, unknown>> => {
    const string = await FileSystem.readAsStringAsync(this.dataPath);
    const payload = JSON.parse(string) as Record<string, unknown>;
    return payload;
  };

  public getPayload = async (): Promise<{ app: string; timestamp: string; event: string } | null> => {
    const payload = await this.loadAppIntentPayload();
    const openedAppPayload = payload[this.storageKey] as string | undefined;
    if (openedAppPayload) {
      const [openedApp, timestamp, event] = openedAppPayload.split("_") as [string, string, string];
      return { app: openedApp, timestamp, event };
    } else {
      return null;
    }
  };

  public update = async (app: string, event: string) => {
    const appIntentPayload = await this.loadAppIntentPayload();
    appIntentPayload.openedApp = `${app}_${Date.now()}_${event}`;
    await FileSystem.writeAsStringAsync(this.dataPath, JSON.stringify(appIntentPayload));
  };

  public clear = async () => {
    const appIntentPayload = await this.loadAppIntentPayload();
    delete appIntentPayload.openedApp;
    await FileSystem.writeAsStringAsync(this.dataPath, JSON.stringify(appIntentPayload));
  };
}

export const ShortCutPayload = new ShortCutPayloadSingleton();
