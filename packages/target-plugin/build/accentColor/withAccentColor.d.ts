import { ConfigPlugin } from "@expo/config-plugins";
export declare const withIosAccentColor: ConfigPlugin<{
    cwd: string;
    color: string;
    darkColor?: string;
}>;
export declare const withIosWidgetBackgroundColor: ConfigPlugin<{
    cwd: string;
    color: string;
    darkColor?: string;
}>;
export declare function setColorAsync({ color, darkColor }: {
    color: string;
    darkColor?: string;
}, colorsetFilePath: string): Promise<void>;
