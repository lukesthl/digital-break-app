import { makeAutoObservable } from "mobx";

import type { App } from "./apps";
import { AppsStore } from "./apps";

export class AppSettingsSingleton {
  private appsStore = new AppsStore();

  constructor() {
    makeAutoObservable(this);
  }
  public async init() {
    await this.appsStore.init();
  }
  public async updateAppSettings(appUpdate: {
    active?: boolean;
    settings?: App["settings"];
    id: string;
  }): Promise<void> {
    await this.appsStore.updateApp({
      id: appUpdate.id,
      active: appUpdate.active,
      settings: appUpdate.settings,
    });
  }

  public deleteApp = async (appId: string): Promise<void> => {
    await this.appsStore.deleteApp(appId);
  };

  get apps(): App[] {
    return this.appsStore.apps;
  }
}

export const AppSettings = new AppSettingsSingleton();
