import { FontAwesome } from "@expo/vector-icons";

export function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size: number;
  style?: any;
}) {
  return <FontAwesome {...props} />;
}
