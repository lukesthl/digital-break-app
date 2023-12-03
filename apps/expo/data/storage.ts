import AsyncStorage from "@react-native-async-storage/async-storage";

export class Storage<
  T extends {
    id: string;
  },
> {
  public logger = {
    log: (...args: unknown[]) => {
      console.log(`[Storage] (KEY: ${this.storageKey})`, ...args);
    },
  };

  constructor(private readonly storageKey: string) {}

  public getAll = async (): Promise<T[]> => {
    const time = Date.now();
    const item = await AsyncStorage.getItem(this.storageKey);
    this.logger.log(`getAll ${Date.now() - time}ms`);
    if (!item) {
      return [];
    }
    return JSON.parse(item) as T[];
  };

  public getById = async ({ id }: { id: string }): Promise<T | null> => {
    const time = Date.now();
    const item = await AsyncStorage.getItem(this.storageKey);
    this.logger.log(`getById ${Date.now() - time}ms`);
    if (!item) {
      return null;
    }
    const app = JSON.parse(item) as T[];
    return app.find((a) => a.id === id) ?? null;
  };

  public create = async (app: T): Promise<T | undefined> => {
    const time = Date.now();
    const item = await this.getAll();
    if (item.find((a) => a.id === app.id)) {
      return;
    }
    item.push(app);
    await this.batchUpdate(item);
    this.logger.log(`create ${Date.now() - time}ms`);
    return app;
  };

  public update = async (updateItem: T): Promise<T> => {
    const time = Date.now();
    const item = await this.getAll();
    if (!item.find((a) => a.id === updateItem.id)) {
      throw new Error("Itme not found");
    }
    const filteredItems = item.filter((a) => a.id !== updateItem.id);
    filteredItems.push(updateItem);
    await this.batchUpdate(filteredItems);
    this.logger.log(`update ${Date.now() - time}ms`);
    return updateItem;
  };

  public batchUpdate = async (item: T[]): Promise<void> => {
    const time = Date.now();
    await AsyncStorage.setItem(this.storageKey, JSON.stringify(item));
    this.logger.log(`batchUpdate ${Date.now() - time}ms`);
  };
}
