import * as FileSystem from "expo-file-system";

import { appConfig } from "../constants/app.config";

const MAX_TRY_COUNT = 10;
let intervalId: NodeJS.Timeout | null = null;
const storageKey = "openedApp";
const pathSplitted = FileSystem.documentDirectory?.split("/");
const appPath = pathSplitted?.slice(0, pathSplitted.length - 2).join("/");
const dataPath = `${appPath}/Library/Application Support/${appConfig.bundleIdentifier}/RCTAsyncLocalStorage_V1/manifest.json`;

// why FileSystem? because AsyncStorage doesnt work in combination with the App Intent.
// It seems like AsyncStorage caches the value and not directly writes it to the file system.
export const listenForShortcut = async (): Promise<{ app: string }> => {
  let tryCount = 0;
  return new Promise((resolve, reject) => {
    const time = new Date().getTime();
    intervalId = setInterval(() => {
      try {
        getOpenedApp()
          .then((appPayload) => {
            if (appPayload && appPayload.event === "break-start") {
              clearInterval(intervalId ?? 0);
              console.log(`took ${new Date().getTime() - time}ms`);
              console.log(`openedApp: ${appPayload.app}`);

              resolve({ app: appPayload.app });
            } else {
              throw new Error("no app");
            }
          })
          .catch((error) => {
            console.log(JSON.stringify(error));
            if (tryCount >= MAX_TRY_COUNT) {
              console.log("interval after max try", JSON.stringify(intervalId));
              clearInterval(intervalId ?? 0);
              reject("max try count reached");
            } else {
              tryCount++;
              reject("first try reject, trying in background");
            }
          });
      } catch (error) {
        console.log("maybe something went wrong");
        console.log(JSON.stringify(error));
      }
    }, 500);
    console.log("interval after interval", JSON.stringify(intervalId));
  });
};

export const clearShortcutListener = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};

export const getOpenedApp = async (): Promise<{ app: string; timestamp: string; event: string } | null> => {
  const string = await FileSystem.readAsStringAsync(dataPath);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const manifest = JSON.parse(string);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const openedAppPayload = manifest[storageKey] as string | undefined;
  if (openedAppPayload) {
    const [openedApp, timestamp, event] = openedAppPayload.split("_") as [string, string, string];
    return { app: openedApp, timestamp, event };
  } else {
    return null;
  }
};

export const updateOpenedApp = async (app: string, event: string) => {
  const string = await FileSystem.readAsStringAsync(dataPath);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const manifest = JSON.parse(string);
  const withoutApp = manifest as Record<string, unknown>;
  withoutApp.openedApp = `${app}_${Date.now()}_${event}`;
  await FileSystem.writeAsStringAsync(dataPath, JSON.stringify(withoutApp));
};

export const clearOpenedApp = async () => {
  const string = await FileSystem.readAsStringAsync(dataPath);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const manifest = JSON.parse(string);
  const withoutApp = manifest as Record<string, unknown>;
  delete withoutApp.openedApp;
  await FileSystem.writeAsStringAsync(dataPath, JSON.stringify(withoutApp));
};
