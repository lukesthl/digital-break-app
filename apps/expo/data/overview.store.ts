import dayjs from "dayjs";
import { makeAutoObservable } from "mobx";

import { AppStatisticsStore } from "./app.statistics";
import type { App } from "./apps";
import { AppsStore } from "./apps";

class OverviewStoreSingleton {
  private appStatisticsStore = new AppStatisticsStore();

  private appsStore = new AppsStore();

  constructor() {
    makeAutoObservable(this);
  }

  public async init() {
    await Promise.all([this.appsStore.init(), this.appStatisticsStore.init()]);
  }

  get totalInterrupted(): number {
    return this.appStatisticsStore.getEvents({ type: "break-start" }).length;
  }

  get totalPrevented(): number {
    return this.appStatisticsStore.getEvents({ type: "app-close" }).length;
  }

  get totalPreventedInPercentage(): number {
    const totalInterrupted = this.totalInterrupted;
    const totalPrevented = this.totalPrevented;
    if (totalInterrupted === 0) {
      return 0;
    }
    const percentage = Math.min(100, Math.round((totalPrevented / totalInterrupted) * 100));
    return Math.max(0, percentage);
  }

  public interruptionsByDay(
    app: App,
    timeRange = {
      from: 0,
      to: 0,
    }
  ): { value: number; dateUnix: number }[] {
    const events = this.appStatisticsStore.getEvents({ type: "break-start", appId: app.id, timeRange });
    const eventsByDay = events.reduce(
      (acc, event) => {
        const day = dayjs(event.timestamp).startOf("day").valueOf();
        if (!acc[day]) {
          acc[day] = 0;
        }
        acc[day] += 1;
        return acc;
      },
      {} as Record<number, number>
    );
    const eventsByDayArray = Object.entries(eventsByDay).map(([dateUnix, value]) => ({
      value,
      dateUnix: Number(dateUnix),
    }));
    return eventsByDayArray;
  }

  public interruptionByApp(
    app: App,
    timeRange = {
      from: 0,
      to: 0,
    }
  ): number {
    return this.appStatisticsStore.getEvents({ type: "break-start", appId: app.id, timeRange }).length;
  }

  public preventedByApp(
    app: App,
    timeRange = {
      from: 0,
      to: 0,
    }
  ): number {
    const preventedByApp = this.appStatisticsStore.getEvents({ type: "app-close", appId: app.id, timeRange }).length;
    return preventedByApp;
  }

  public preventedByAppInPercentage(app: App): number {
    const interruptedByApp = this.interruptionByApp(app);
    const preventedByApp = this.preventedByApp(app);
    if (interruptedByApp === 0) {
      return 0;
    }
    return Math.max(0, Math.min(100, Math.round((preventedByApp / interruptedByApp) * 100)));
  }

  public hoursSavedByApp(
    app: App,
    timeRange = {
      from: 0,
      to: 0,
    }
  ): number {
    const preventedByApp = this.preventedByApp(app, timeRange);
    const dailyTimeSpentMinutes =
      this.appsStore.apps.find((a) => a.id === app.id)?.settings?.dailyTimeSpentMinutes ?? 0;
    const minutesSaved = preventedByApp * dailyTimeSpentMinutes;
    const hoursSavedByApp = minutesSaved / 60;
    return Math.round(hoursSavedByApp * 100) / 100;
  }

  public hoursSaved(
    timeRange = {
      from: 0,
      to: 0,
    }
  ): number {
    const apps = this.appsStore.apps;
    const hoursSaved = apps.reduce((sum, app) => sum + this.hoursSavedByApp(app, timeRange), 0);
    return Math.round(hoursSaved * 100) / 100;
  }

  get stillCollectingData(): boolean {
    if (this.appStatisticsStore.events.length === 0) {
      return true;
    }
    const firstEvent = this.appStatisticsStore.events[0];
    if (!firstEvent) {
      return true;
    }
    const now = Date.now();
    const oneDay = 1000 * 60 * 60 * 24;
    return now - firstEvent.timestamp < oneDay && this.totalInterrupted < 10;
  }

  get apps(): App[] {
    return this.appsStore.apps;
  }
}

export const OverviewStore = new OverviewStoreSingleton();
