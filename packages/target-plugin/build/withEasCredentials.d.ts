import { ConfigPlugin } from "expo/config-plugins";
export declare const withDefaultAppGroup: ConfigPlugin;
export declare const withEASTargets: ConfigPlugin<{
    bundleIdentifier: string;
    targetName: string;
}>;
