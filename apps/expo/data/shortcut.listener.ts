import * as FileSystem from "expo-file-system";

const MAX_TRY_COUNT = 10;
let intervalId: NodeJS.Timeout | null = null;
const storageKey = "openedApp";

export const listenForShortcut = async (): Promise<{ app: string }> => {
  let tryCount = 0;
  return new Promise((resolve, reject) => {
    const time = new Date().getTime();
    intervalId = setInterval(() => {
      try {
        const pathSplitted = FileSystem.documentDirectory?.split("/");
        const appPath = pathSplitted?.slice(0, pathSplitted.length - 2).join("/");
        const dataPath = `${appPath}/Library/Application Support/com.lukesthl.digitalbreak/RCTAsyncLocalStorage_V1/manifest.json`;
        FileSystem.readAsStringAsync(dataPath)
          .then((string) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const manifest = JSON.parse(string);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            const openedApp = manifest[storageKey] as string | undefined;
            if (openedApp) {
              console.log("clearing interval");
              console.log("interval after with hit", JSON.stringify(intervalId));
              clearInterval(intervalId ?? 0);
              console.log(`took ${new Date().getTime() - time}ms`);
              console.log(`openedApp: ${openedApp}`);
               
              resolve({ app: openedApp });
              const withoutApp = manifest as Record<string, unknown>;
              delete withoutApp[storageKey];
              void FileSystem.writeAsStringAsync(dataPath, JSON.stringify(withoutApp));
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

// import AsyncStorage from "@react-native-async-storage/async-storage";

// const MAX_TRY_COUNT = 10;
// let intervalId: NodeJS.Timeout | null = null;
// const storageKey = "openedApp";

// export const listenForShortcut = async (): Promise<{ app: string }> => {
//   let tryCount = 0;
//   return new Promise((resolve, reject) => {
//     const time = new Date().getTime();
//     intervalId = setInterval(() => {
//       void AsyncStorage.getItem(storageKey).then((value) => {
//         console.log(`value: ${value}`);
//         if (value) {
//           clearInterval(intervalId ?? 0);
//           void AsyncStorage.removeItem(storageKey);
//           console.log(`took ${new Date().getTime() - time}ms`);
//           resolve({ app: value });
//         } else {
//           if (tryCount >= MAX_TRY_COUNT) {
//             clearInterval(intervalId ?? 0);
//             reject("max try count reached");
//           } else {
//             console.log("increase try count: " + (tryCount + 1));
//             tryCount++;
//           }
//         }
//       });
//     }, 500);
//   });
// };

// export const clearShortcutListener = () => {
//   if (intervalId) {
//     clearInterval(intervalId);
//   }
// };
