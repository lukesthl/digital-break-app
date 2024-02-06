import { Linking } from "react-native";
import * as Crypto from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { action, makeAutoObservable, observable } from "mobx";

import { Storage } from "./storage";

export interface App {
  id: string;
  name: string;
  settings: IAppSettings;
  active: boolean;
  iconKey: SupportedApp;
  key: SupportedApp;
}

interface IAppSettings {
  breakDurationSeconds: number;
  quickAppSwitchDurationMinutes: number;
  dailyTimeSpentMinutes: number;
}

export type SupportedApp =
  | "instagram"
  | "twitter"
  | "facebook"
  | "youtube"
  | "whatsapp"
  | "spotify"
  | "linkedin"
  | "tiktok"
  | "reddit"
  | "snapchat"
  | "twitch"
  | "telegram"
  | "discord"
  | "safari"
  | "bereal"
  | "clashofclans"
  | "clashroyale"
  | "imessage"
  | "netflix"
  | "candycrush"
  | "chrome"
  | "disney+"
  | "firefox"
  | "gmail"
  | "mastodon"
  | "microsoftteams"
  | "outlook"
  | "pokemongo"
  | "roblox"
  | "signal"
  | "skype"
  | "sudoku"
  | "tinder"
  | "toonblast"
  | "tumblr"
  | "zalandofashion"
  | "applenews";

export interface IAvailableApp {
  key: string;
  name: string;
  scheme: string;
}

export const defaultAppSettings: IAppSettings = {
  breakDurationSeconds: 10,
  quickAppSwitchDurationMinutes: 5,
  dailyTimeSpentMinutes: 30,
};

export class AppsStore {
  private storage = new Storage<App>("apps");

  private _apps = observable<App>([]);

  private _availableApps = observable<IAvailableApp>([]);

  constructor() {
    makeAutoObservable(this, { init: action });
  }

  public async init() {
    try {
      const [userApps, availableApps] = await Promise.allSettled([this.storage.getAll(), this.fetchAvailableApps()]);
      if (userApps.status === "fulfilled") {
        this.apps = userApps.value;
      }
      if (availableApps.status === "fulfilled") {
        this.availableApps.replace(availableApps.value);
        void this.cacheAvailableApps(availableApps.value);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private cacheAvailableApps = async (apps: IAvailableApp[]) => {
    await AsyncStorage.setItem("availableApps", JSON.stringify(apps));
  };

  public fetchAvailableApps = async (): Promise<IAvailableApp[]> => {
    let apps: IAvailableApp[] = [];
    try {
      apps = (await (
        await fetch("https://lukesthl.github.io/digital-break-app/public/apps.json")
      ).json()) as IAvailableApp[];
      console.log("Fetched available apps");
    } catch (error) {
      console.log("Error fetching available apps, falling back to cached version");
      const cachedApps = await AsyncStorage.getItem("availableApps");
      console.log("now using", cachedApps);
      if (cachedApps) {
        apps = JSON.parse(cachedApps) as IAvailableApp[];
      }
    }
    return apps;
  };

  public openApp = async (key: IAvailableApp["key"]): Promise<void> => {
    console.log(key);
    console.log("Opening app", this.availableApps.find((app) => app.key === key)?.scheme ?? "");
    await Linking.openURL(this.availableApps.find((app) => app.key === key)?.scheme ?? "");
  };

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
        iconKey: appShortcutName.toLowerCase().replaceAll(" ", "") as SupportedApp,
        id: Crypto.randomUUID(),
        settings: defaultAppSettings,
        key: appShortcutName.toLowerCase().replaceAll(" ", "") as SupportedApp,
      });
      if (!app) {
        throw new Error("App not created");
      }
      this.apps.push(app);
      return app;
    }
  }

  public deleteApp = async (appId: string): Promise<void> => {
    await this.storage.delete({ id: appId });
    await this.init();
  };

  public deleteAll = async (): Promise<void> => {
    await this.storage.deleteAll();
    await this.init();
  };

  public importApps = async (apps: App[]): Promise<void> => {
    await this.storage.batchUpdate(apps);
    await this.init();
  };

  public get apps() {
    return this._apps;
  }
  public set apps(value: App[]) {
    this._apps.replace(value);
  }

  public getIconUrl = (iconKey: string) => {
    const url = new URL(`https://cdn.simpleicons.org/${iconKey}`);
    return url.toString();
  };

  public get availableApps() {
    return this._availableApps;
  }
  public set availableApps(value) {
    this._availableApps = value;
  }
}
