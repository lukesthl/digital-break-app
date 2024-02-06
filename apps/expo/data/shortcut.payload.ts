import * as FileSystem from "expo-file-system";

import { appConfig } from "../constants/app.config";

export interface IPayload {
  openedApp: string;
  timestamp: number;
  event: "break-start" | "app-reopen" | "break-skip";
}

class ShortCutPayloadSingleton {
  private pathSplitted = FileSystem.documentDirectory?.split("/");
  private appPath = this.pathSplitted?.slice(0, this.pathSplitted.length - 2).join("/");
  private dataPath = `${this.appPath}/Library/Application Support/${appConfig.bundleIdentifier}/RCTAsyncLocalStorage_V1/appintent.json`;

  private loadAppIntentPayload = async (): Promise<IPayload | undefined> => {
    const string = await FileSystem.readAsStringAsync(this.dataPath);
    const payload = JSON.parse(string) as IPayload;
    return payload;
  };

  public getPayload = async (): Promise<IPayload | null> => {
    const payload = await this.loadAppIntentPayload();
    if (payload && JSON.stringify(payload) !== "{}") {
      return payload;
    } else {
      return null;
    }
  };

  public update = async (event: IPayload["event"]) => {
    const appIntentPayload = await this.loadAppIntentPayload();
    if (!appIntentPayload) {
      return;
    }
    appIntentPayload.event = event;
    console.log("updating app intent payload", appIntentPayload);
    await FileSystem.writeAsStringAsync(this.dataPath, JSON.stringify(appIntentPayload));
  };

  public clear = async () => {
    const appIntentPayload = await this.loadAppIntentPayload();
    if (!appIntentPayload) {
      return;
    }
    await FileSystem.writeAsStringAsync(this.dataPath, JSON.stringify({}));
  };
}

export const ShortCutPayload = new ShortCutPayloadSingleton();
