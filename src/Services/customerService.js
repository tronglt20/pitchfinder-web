import instance from "./axios";

const GetCustomerAPI = () => {
	return instance.get("/order/owner/customer");
};

export { GetCustomerAPI };
