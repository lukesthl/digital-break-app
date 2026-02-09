import { useState } from "react";
import { SvgUri } from "react-native-svg";
import { View } from "tamagui";
import { AppSettings } from "../data/app.settings";

export const AppIcon = ({ appKey }: { appKey: string }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return error ? (
    <View width={20} height={20} backgroundColor="$grey1" borderRadius="$1" />
  ) : (
    <>
      <SvgUri
        uri={AppSettings.getIconUrl(appKey)}
        width={20}
        height={20}
        key={appKey}
        style={{ opacity: loaded ? 1 : 0 }}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <View
          width={20}
          height={20}
          backgroundColor="$grey1"
          borderRadius="$1"
        />
      )}
    </>
  );
};
