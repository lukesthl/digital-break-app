import type { IPayload} from "./shortcut.payload";
import { ShortCutPayload } from "./shortcut.payload";

const MAX_TRY_COUNT = 10;
let intervalIds: NodeJS.Timeout[] = [];

// why FileSystem? because AsyncStorage doesnt work in combination with the App Intent.
// It seems like AsyncStorage caches the value in memory and not directly writes it to the file system.
export const listenForShortcut = async (): Promise<{ app: string; timestamp: number; event: IPayload["event"] }> => {
  let tryCount = 0;
  return new Promise((resolve, reject) => {
    const time = new Date().getTime();
    const newIntervalId = setInterval(() => {
      try {
        ShortCutPayload.getPayload()
          .then((appPayload) => {
            if (appPayload && appPayload.event !== "break-skip") {
              clearShortcutListener();
              console.log(`took ${new Date().getTime() - time}ms`);
              console.log(`openedApp: ${appPayload.openedApp}`);

              resolve({ app: appPayload.openedApp, timestamp: appPayload.timestamp, event: appPayload.event });
            } else {
              throw new Error("no app");
            }
          })
          .catch((error) => {
            console.log(JSON.stringify(error));
            if (tryCount >= MAX_TRY_COUNT) {
              console.log("interval after max try", JSON.stringify(intervalIds));
              clearShortcutListener();
              reject("max try count reached");
            } else {
              tryCount++;
              reject("first try reject, trying in background");
            }
          });
      } catch (error) {
        console.log(error);
      }
    }, 500);
    intervalIds.push(newIntervalId);
  });
};

export const clearShortcutListener = () => {
  intervalIds.forEach((id) => {
    clearInterval(id);
  });
  intervalIds = [];
};
