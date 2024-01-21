import { ResizeMode, Video } from "expo-av";
import { observer } from "mobx-react-lite";

import { Container } from "../../components/container";
import { ShadowCard } from "../../components/shadow.card";

const VideoTutorial = observer(() => {
  return (
    <Container paddingVertical={"$4"}>
      <ShadowCard>
        <Video
          source={{
            uri: "https://lukesthl.github.io/digital-break-app/public/setup-guide.mp4",
          }}
          style={{ width: "100%", height: 300, borderRadius: 8 }}
          useNativeControls
          resizeMode={ResizeMode.COVER}
          isLooping
        />
      </ShadowCard>
    </Container>
  );
});

export default VideoTutorial;
