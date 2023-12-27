import * as Crypto from "expo-crypto";
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

// TODO add more apps / test all apps
export const deepLinks: Record<SupportedApp, string> = {
  instagram: "instagram://",
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
  bereal: "https://www.google.com",
  clashofclans: "https://www.google.com",
  clashroyale: "https://www.google.com",
  imessage: "https://www.google.com",
  netflix: "https://www.google.com",
  candycrush: "https://www.google.com",
  chrome: "https://www.google.com",
  "disney+": "https://www.google.com",
  firefox: "https://www.google.com",
  gmail: "https://www.google.com",
  mastodon: "https://www.google.com",
  microsoftteams: "https://www.google.com",
  outlook: "https://www.google.com",
  pokemongo: "https://www.google.com",
  roblox: "https://www.google.com",
  signal: "https://www.google.com",
  skype: "https://www.google.com",
  sudoku: "https://www.google.com",
  tinder: "https://www.google.com",
  toonblast: "https://www.google.com",
  tumblr: "https://www.google.com",
  zalandofashion: "https://www.google.com",
  applenews: "applenews://",
};

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

export const defaultAppSettings: IAppSettings = {
  breakDurationSeconds: 10,
  quickAppSwitchDurationMinutes: 5,
  dailyTimeSpentMinutes: 30,
};

export class AppsStore {
  private storage = new Storage<App>("apps");

  private _apps = observable<App>([]);

  constructor() {
    makeAutoObservable(this, { init: action });
  }

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
        iconKey: appShortcutName.toLowerCase().replace(" ", "") as SupportedApp,
        id: Crypto.randomUUID(),
        settings: defaultAppSettings,
        key: appShortcutName.toLowerCase().replace(" ", "") as SupportedApp,
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
}
