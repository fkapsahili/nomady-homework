import axios from "axios";
// @ts-ignore
import { GITHUB_ACCESS_TOKEN } from "@env";

const BASE_URL = "https://api.github.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
    Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
  },
});
