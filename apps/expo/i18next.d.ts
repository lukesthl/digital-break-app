import "i18next";

import type de from "./constants/translation/de.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "de";
    resources: {
      de: typeof de.translation;
    };
    // other
  }
}
