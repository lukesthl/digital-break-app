import * as Crypto from "expo-crypto";
import { observable } from "mobx";

import { Storage } from "./storage";

interface Event {
  id: string;
  appId: string;
  type: "break-start" | "app-reopen" | "app-close";
  timestamp: number;
}

export class AppStatisticsStore {
  private events = observable<Event>([]);

  private storage = new Storage<Event>("app-statistics");

  public async init() {
    const events = await this.storage.getAll();
    this.events.replace(events);
  }

  public getEventsByType({ type }: { type: Event["type"] }) {
    return this.events.filter((e) => e.type === type);
  }

  public async trackEvent({ appId, type }: { appId: string; type: Event["type"] }) {
    const event = { appId, type, id: Crypto.randomUUID(), timestamp: Date.now() };
    await this.storage.create(event);
  }
}
