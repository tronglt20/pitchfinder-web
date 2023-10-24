import axios from "./axios";

export const GetCurrentUserAPI = () => {
	return axios.get("/iam/authentication/current-user");
};

export const Authentication = (username, password) => {
	return axios.post("/iam/authentication", { username, password });
};
