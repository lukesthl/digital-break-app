import { makeAutoObservable } from "mobx";

import { AppStatisticsStore } from "./app.statistics";

class OverviewStoreSingleton {
  private appStatisticsStore = new AppStatisticsStore();

  constructor() {
    makeAutoObservable(this);
  }

  public async init() {
    await this.appStatisticsStore.init();
  }

  get totalInterrupted(): number {
    return this.appStatisticsStore.getEventsByType({ type: "break-start" }).length;
  }

  get totalPrevented(): number {
    return this.appStatisticsStore.getEventsByType({ type: "app-close" }).length;
  }

  get totalPreventedInPercentage(): number {
    const totalInterrupted = this.totalInterrupted;
    const totalPrevented = this.totalPrevented;
    if (totalInterrupted === 0) {
      return 0;
    }
    return Math.round((totalPrevented / totalInterrupted) * 100);
  }
}

export const OverviewStore = new OverviewStoreSingleton();
