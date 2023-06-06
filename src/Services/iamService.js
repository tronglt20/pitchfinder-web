import axios from "../axios";

const GetCurrentUserAPI = () => {
  return axios.get("/iam/authentication/current-user");
};

const Authentication = (username, password) => {
  return axios.post("/iam/authentication", { username, password });
};

export { GetCurrentUserAPI, Authentication };
