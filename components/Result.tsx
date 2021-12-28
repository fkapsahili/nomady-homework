import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { GitHubProfile } from "./ResultList";

type ResultProps = {
  user: GitHubProfile;
  onClick: () => void;
};

export const Result: React.FC<ResultProps> = ({ user, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.listItem}>
      <Image style={styles.avatar} source={{ uri: user?.avatar_url }} />
      <Text style={styles.username}>{user.login}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#fff",
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    margin: 10,
  },
  username: {
    color: Colors.light.tint,
  },
});
