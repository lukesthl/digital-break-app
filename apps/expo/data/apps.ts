import * as Crypto from "expo-crypto";
import { observable } from "mobx";

import { Storage } from "./storage";

export interface App {
  id: string;
  name: string;
  settings: IAppSettings;
  active: boolean;
  iconKey: keyof typeof appIcons;
  key: keyof typeof deepLinks;
}

interface IAppSettings {
  breakDurationSeconds: number;
  quickAppSwitchDurationMinutes: number;
}

export const deepLinks = {
  instagram: "instagram",
  twitter: "twitter://user?screen_name=USERNAME",
  facebook: "fb://profile/USER_ID",
  youtube: "youtube://www.youtube.com/channel/CHANNEL_ID",
  whatsapp: "whatsapp://send?text=Hello",
  spotify: "spotify://user/USER_ID",
  linkedin: "linkedin://profile/USER_ID",
  tiktok: "tiktok://user/USER_ID",
  reddit: "reddit://user/USERNAME",
  snapchat: "snapchat://add/USERNAME",
  twitch: "twitch://user?user_id=USER_ID",
  telegram: "tg://resolve?domain=USERNAME",
  discord: "discord://discord.com/channels/USER_ID",
  safari: "https://www.google.com",
} as const;

export const appIcons = {
  instagram: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  twitter: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  youtube: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  whatsapp: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  spotify: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
  linkedin: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  tiktok: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  reddit: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  snapchat: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  twitch: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  telegram: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  discord: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  safari: "https://static-00.iconduck.com/assets.00/safari-ios-icon-512x512-v014xh8r.png",
} as const;

export const defaultAppSettings: IAppSettings = {
  breakDurationSeconds: 10,
  quickAppSwitchDurationMinutes: 5,
};

export class AppsStore {
  private storage = new Storage<App>("apps");

  private _apps = observable<App>([]);

  public async init() {
    try {
      const apps = await this.storage.getAll();
      this.apps = apps;
    } catch (error) {
      console.log(error);
    }
  }

  public async updateApp(appUpdate: Partial<App> & { id: string }): Promise<void> {
    const apps = this.apps.map((app) => {
      if (app.id === appUpdate.id) {
        const definedProps = (obj: object) =>
          Object.fromEntries(Object.entries(obj).filter(([_k, v]) => v !== undefined));

        const merged = Object.assign(app, definedProps(appUpdate));
        return merged;
      }
      return app;
    });
    this.apps = apps;
    await this.storage.batchUpdate(this.apps);
  }

  public async getOrCreateApp({ appShortcutName }: { appShortcutName: string }): Promise<App> {
    await this.init();
    const app = this.apps.find((app) => app.name === appShortcutName);
    if (app) {
      return app;
    } else {
      const app = await this.storage.create({
        name: appShortcutName,
        active: true,
        iconKey: appShortcutName.toLowerCase().replace(" ", "") as keyof typeof appIcons,
        id: Crypto.randomUUID(),
        settings: defaultAppSettings,
        key: appShortcutName.toLowerCase().replace(" ", "") as keyof typeof appIcons,
      });
      if (!app) {
        throw new Error("App not created");
      }
      return app;
    }
  }

  public deleteApp = async (appId: string): Promise<void> => {
    await this.storage.delete({ id: appId });
    await this.init();
  };

  public get apps() {
    return this._apps;
  }
  public set apps(value: App[]) {
    this._apps.replace(value);
  }
}
