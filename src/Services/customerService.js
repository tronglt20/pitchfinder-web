import axios from "../axios";

const GetCustomerAPI = () => {
	return axios.get("/order/owner/customer");
};

export { GetCustomerAPI };
