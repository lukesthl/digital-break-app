import { ConfigPlugin } from "@expo/config-plugins";
declare const withTargetsDir: ConfigPlugin<{
    appleTeamId: string;
    match?: string;
}>;
export default withTargetsDir;
