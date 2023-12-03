import { ConfigPlugin } from "@expo/config-plugins";
export type XcodeSettings = {
    name: string;
    /** Directory relative to the project root, (i.e. outside of the `ios` directory) where the widget code should live. */
    cwd: string;
    bundleId: string;
    deploymentTarget: string;
    currentProjectVersion: number;
    frameworks: string[];
    type: ExtensionType;
    hasAccentColor?: boolean;
    teamId?: string;
};
export declare const withXcodeChanges: ConfigPlugin<XcodeSettings>;
import { ExtensionType } from "./target";
