import { StyleSheet, Text, Platform, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ResultList } from "../components/ResultList";
import Colors from "../constants/Colors";

export default function GitHubProfilesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ResultList />
      <View style={styles.content}>
        <Text
          style={{
            marginTop: 10,
            color: Colors.dark.text,
          }}
        >
          This is just a text that should not get shifted or covered by the
          Flatlist.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.light.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
  content: {
    paddingTop: 50,
  },
});
