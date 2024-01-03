import { ShortCutPayload } from "./shortcut.payload";

const MAX_TRY_COUNT = 10;
let intervalId: NodeJS.Timeout | null = null;

// why FileSystem? because AsyncStorage doesnt work in combination with the App Intent.
// It seems like AsyncStorage caches the value in memory and not directly writes it to the file system.
export const listenForShortcut = async (): Promise<{ app: string; timestamp: number }> => {
  let tryCount = 0;
  return new Promise((resolve, reject) => {
    const time = new Date().getTime();
    intervalId = setInterval(() => {
      try {
        ShortCutPayload.getPayload()
          .then((appPayload) => {
            if (appPayload && appPayload.event === "break-start") {
              clearInterval(intervalId ?? 0);
              console.log(`took ${new Date().getTime() - time}ms`);
              console.log(`openedApp: ${appPayload.app}`);

              resolve({ app: appPayload.app, timestamp: parseInt(appPayload.timestamp, 10) });
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
        console.log(error);
      }
    }, 500);
  });
};

export const clearShortcutListener = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};
