import axios from "axios";
import { useState } from "react";
import { FlatList, Linking, StyleSheet, View } from "react-native";
import Layout from "../constants/Layout";
import { api } from "../lib/api";
import { Autocomplete } from "./Autocomplete";
import { GithubUser } from "./GithubUser";

export type GitHubProfile = {
  avatar_url: string;
  login: string;
  html_url: string;
};

type FlatListItem = {
  item: GitHubProfile;
  index: number;
};

export const ProfileList: React.FC<{}> = ({}) => {
  const [data, setData] = useState<GitHubProfile[]>([]);

  const handleSearch = async (username: string) => {
    // Don't call the api if there is nothing to search for.
    if (username) {
      try {
        const response = await api.get(`/search/users?q=${username}`);
        if (response?.data?.items) {
          setData(response.data.items);
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.message) {
          console.log(error.message);
        }
      }
    }
  };

  const handleClick = (user: GitHubProfile) => {
    // Make sure the requested url can be opened on the device.
    Linking.canOpenURL(user?.html_url).then((supported) => {
      if (supported) {
        Linking.openURL(user.html_url);
      } else {
        console.log("Unsupported Linking URI: ", user?.html_url);
      }
    });
  };

  const renderItem = ({ item, index }: FlatListItem) => {
    return (
      <GithubUser key={index} user={item} onClick={() => handleClick(item)} />
    );
  };

  return (
    <View style={styles.container}>
      <Autocomplete
        onSearch={({ value }) => {
          handleSearch(value);
        }}
        onClear={() => setData([])}
      />
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        initialNumToRender={30}
        keyboardShouldPersistTaps="always"
        bounces={false}
        nestedScrollEnabled
        data={data}
        keyExtractor={(item: GitHubProfile) => String(item.login)}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    zIndex: 10,
  },
  list: {
    position: "absolute",
    top: 40,
    width: "100%",
    maxHeight: Layout.window.height * 0.75,
  },
});
