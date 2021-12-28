import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { TabBarIcon } from "./TabBarIcon";

type AutocompleteProps = {
  onSearch: ({ value }: { value: string }) => void;
  onClear: () => void;
  disabled?: boolean;
};

export const Autocomplete: React.FC<AutocompleteProps> = ({
  onSearch,
  onClear,
  disabled = false,
}) => {
  const [filter, setFilter] = useState("");
  const searchValue = useDebouncedValue(filter);

  useEffect(() => {
    onSearch({ value: searchValue });
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <TabBarIcon name="search" color="gray" size={15} />
      <TextInput
        editable={!disabled}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Type in a GitHub username..."
        style={styles.input}
        placeholderTextColor="#808080"
        value={filter}
        onChangeText={(text) => setFilter(text)}
        blurOnSubmit
        maxLength={40}
      />
      <TouchableOpacity
        onPress={() => {
          setFilter("");
          Keyboard.dismiss();
          if (typeof onClear === "function") {
            onClear();
          }
        }}
      >
        <TabBarIcon name="times-circle" size={15} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 2,
  },
  input: {
    width: "90%",
    height: 35,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 2,
  },
  icon: {
    width: 15,
    height: 15,
  },
});
