import axios from "../axios";

const Authentication = (username, password) => {
  return axios.post("/iam/authentication", { username, password });
};

export { Authentication };
