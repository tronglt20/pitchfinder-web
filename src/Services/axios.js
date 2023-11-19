import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../Store/auth";

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
		const originalRequest = error.config;
		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			useDispatch(logout());
			localStorage.removeItem("accessToken");
			localStorage.removeItem("isAuthentication");
			originalRequest._retry = true;
		}
		return Promise.reject(error);
	}
);

export default instance;
