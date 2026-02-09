import * as Localization from "expo-localization";
import i18next from "i18next";

import de from "../constants/translation/de.json";
import en from "../constants/translation/en.json";

export const translate = {
  t: i18next.t,
  init: async () => {
    await i18next.init({
      compatibilityJSON: "v3",
      lng: Localization.getLocales()[0]?.languageTag ?? "en",
      fallbackLng: "en",
      resources: { de, en },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
  },
};
