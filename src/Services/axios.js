import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_ENDPOINT,
});

instance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("accessToken");
		config.headers["Authorization"] = "Bearer " + token;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

window.addEventListener("beforeunload", () => {
	localStorage.removeItem("accessToken");
});

export default instance;
