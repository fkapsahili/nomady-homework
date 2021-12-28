import { Dimensions, Platform } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const topOffset = Platform.OS === "ios" ? 60 : 0;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  topOffset,
};
