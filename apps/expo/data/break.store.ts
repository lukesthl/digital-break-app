import { makeAutoObservable } from "mobx";

import { appSettings } from "./app.settings";

export class BreakStoreSingleton {
  constructor() {
    makeAutoObservable(this);
  }

  public async init({ appShortcutName }: { appShortcutName: string }) {
    console.log("init digital break store");
    console.log("appShortcutName", appShortcutName);
    const app = await appSettings.getOrCreateAppSettings({ appShortcutName });
    console.log("app", app);
    await Promise.resolve();
  }
}

export const BreakStore = new BreakStoreSingleton();
