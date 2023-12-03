import * as Crypto from "expo-crypto";
import { makeAutoObservable, observable } from "mobx";

import { App, appIcons, defaultAppSettings } from "./apps";
import { Storage } from "./storage";

export class AppSettings {
  private storage = new Storage<App>("apps");

  private _apps = observable<App>([]);

  private _selectedApp: App | null = null;

  constructor() {
    makeAutoObservable(this);
  }
  public async init() {
    try {
      const apps = await this.storage.getAll();
      this.apps = apps;
    } catch (error) {
      console.log(error);
    }
  }

  public async getOrCreateAppSettings({ appShortcutName }: { appShortcutName: string }): Promise<App> {
    const apps = await this.storage.getAll();
    const app = apps.find((app) => app.name === appShortcutName);
    if (app) {
      return app;
    } else {
      const app = await this.storage.create({
        name: appShortcutName,
        active: true,
        iconKey: appShortcutName.toLowerCase().replace(" ", "") as keyof typeof appIcons,
        id: Crypto.randomUUID(),
        settings: defaultAppSettings,
      });
      if (!app) {
        throw new Error("App not created");
      }
      return app;
    }
  }

  public async selectApp(appId: string): Promise<void> {
    this.selectedApp = await this.storage.getById({ id: appId });
    console.log(JSON.stringify(this.selectedApp));
  }

  public async updateApp(appUpdate: Partial<App>): Promise<void> {
    if (!this.selectedApp) {
      return;
    }
    this.selectedApp = await this.storage.update({
      ...this.selectedApp,
      ...appUpdate,
    });
    await this.init();
  }

  public get selectedApp(): App | null {
    return this._selectedApp;
  }
  public set selectedApp(value: App | null) {
    this._selectedApp = value;
  }

  public get apps() {
    return this._apps;
  }
  public set apps(value: App[]) {
    this._apps.replace(value);
  }
}

export const appSettings = new AppSettings();
