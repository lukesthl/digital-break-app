export interface App {
  id: string;
  name: string;
  settings: IAppSettings;
  active: boolean;
  iconKey: keyof typeof appIcons;
}

export interface IAppSettings {
  breakDurationSeconds: number;
  quickAppSwitchDurationMinutes: number;
}

export const deepLinks = {
  instagram: "instagram",
  twitter: "twitter://user?screen_name=USERNAME",
  facebook: "fb://profile/USER_ID",
  youtube: "youtube://www.youtube.com/channel/CHANNEL_ID",
  whatsapp: "whatsapp://send?text=Hello",
  spotify: "spotify://user/USER_ID",
  linkedin: "linkedin://profile/USER_ID",
  tiktok: "tiktok://user/USER_ID",
  reddit: "reddit://user/USERNAME",
  snapchat: "snapchat://add/USERNAME",
  twitch: "twitch://user?user_id=USER_ID",
  telegram: "tg://resolve?domain=USERNAME",
  discord: "discord://discord.com/channels/USER_ID",
} as const;

export const appIcons = {
  instagram: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  twitter: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  youtube: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  whatsapp: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  spotify: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
  linkedin: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  tiktok: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  reddit: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  snapchat: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  twitch: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  telegram: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  discord: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
} as const;

export const defaultAppSettings: IAppSettings = {
  breakDurationSeconds: 10,
  quickAppSwitchDurationMinutes: 5,
};
