import * as Crypto from "expo-crypto";
import { action, makeAutoObservable, observable } from "mobx";

import { Storage } from "./storage";

interface Event {
  id: string;
  appId: string;
  type: "break-start" | "app-reopen" | "app-close";
  timestamp: number;
}

export class AppStatisticsStore {
  private _events = observable<Event>([]);

  public get events() {
    return this._events;
  }
  public set events(value: Event[]) {
    this._events.replace(value);
  }

  constructor() {
    makeAutoObservable(this, { init: action });
  }

  private storage = new Storage<Event>("app-statistics");

  public async init() {
    const events = await this.storage.getAll();
    this.events = events;
  }

  public getEvents({ type, appId, id, timeRange }: Partial<Event> & { timeRange?: { from: number; to: number } }) {
    return this.events.filter((e) => {
      if (type && e.type !== type) {
        return false;
      }
      if (appId && e.appId !== appId) {
        return false;
      }
      if (id && e.id !== id) {
        return false;
      }
      if (timeRange) {
        if (timeRange.from && e.timestamp < timeRange.from) {
          return false;
        }
        if (timeRange.to && e.timestamp > timeRange.to) {
          return false;
        }
      }
      return true;
    });
  }

  public async trackEvent({ appId, type }: { appId: string; type: Event["type"] }) {
    const event = { appId, type, id: Crypto.randomUUID(), timestamp: Date.now() };
    await this.storage.create(event);
  }

  public async deleteEventsByAppId(appId: string) {
    await this.storage.batchUpdate(this.events.filter((e) => e.appId !== appId));
    await this.init();
  }

  public async deleteAll() {
    await this.storage.deleteAll();
    await this.init();
  }
}
