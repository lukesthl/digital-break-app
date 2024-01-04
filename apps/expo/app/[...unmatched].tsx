import { Link } from "expo-router";
import { Button, Heading, View } from "tamagui";

export default function NotFoundScreen() {
  return (
    <>
      <View marginTop="$8" space="$3.5" marginHorizontal="$4">
        <View>
          <Heading>{"not found"}</Heading>
        </View>
        <Link href={"/"} asChild>
          <Button>{""}</Button>
        </Link>
      </View>
    </>
  );
}
