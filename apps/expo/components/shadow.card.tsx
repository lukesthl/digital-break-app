import { View } from "tamagui";

export const ShadowCard = ({
  children,
  ...viewProps
}: { children: React.ReactNode } & React.ComponentProps<typeof View>) => (
  <View
    backgroundColor={"$background1"}
    shadowColor={"black"}
    shadowOpacity={0.1}
    shadowRadius={6}
    borderRadius={"$4"}
    borderWidth={1}
    borderColor={"#E3E3E3"}
    shadowOffset={{ width: 0, height: 2 }}
    padding="$3"
    {...viewProps}
  >
    {children}
  </View>
);
