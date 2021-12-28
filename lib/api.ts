import axios from "axios";

// TODO: save the access token in an .env file e.g. with react-native-dotenv
const ACCESS_TOKEN = "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";
const BASE_URL = "https://api.github.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
    Authorization: `token ${ACCESS_TOKEN}`,
  },
});
