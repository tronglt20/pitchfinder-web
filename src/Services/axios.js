import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_ENDPOINT,
});

const handleLogout = () => {
	localStorage.removeItem("accessToken");
	localStorage.removeItem("isAuthentication");
	window.location.reload();
};

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
			handleLogout();
			originalRequest._retry = true;
		}
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => response,
	(error) => {
		const originalRequest = error.config;
		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			handleLogout();
			originalRequest._retry = true;
		}
		return Promise.reject(error);
	}
);
export default instance;
