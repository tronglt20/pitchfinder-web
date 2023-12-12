import instance from "./axios";

const GetCustomerAPI = (searchString) => {
	return instance.get(`/order/owner/customer?${searchString}`);
};

export { GetCustomerAPI };
