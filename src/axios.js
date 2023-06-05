import axios from "axios";

const token = localStorage.getItem("accessToken");

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    Authorization: "Bearer " + token,
  },
});

export default instance;
