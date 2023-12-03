// Import the native module. On web, it will be resolved to ExpoExitApp.web.ts
// and on native platforms to ExpoExitApp.ts
import ExpoExitAppModule from "./ExpoExitAppModule";

export function exit(): void {
  return ExpoExitAppModule.exit();
}
