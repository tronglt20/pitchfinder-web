import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_ENDPOINT,
});

const setAuthorizationHeader = () => {
	const token = localStorage.getItem("accessToken");
	if (token) {
		instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete instance.defaults.headers.common["Authorization"];
	}
};

setAuthorizationHeader();

window.addEventListener("beforeunload", () => {
	localStorage.removeItem("accessToken");
});

export default instance;
