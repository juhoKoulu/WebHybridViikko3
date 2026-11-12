import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";

export default function CustomAppBar({
  navigation,
  back,
  route,
}: StackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("Second")}
        />
      )}

      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
}
