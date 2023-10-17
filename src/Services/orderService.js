import axios from "../axios";

const GetOrderAPI = () => {
	return axios.get("/order/owner");
};

export { GetOrderAPI };
