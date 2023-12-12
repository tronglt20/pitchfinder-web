import instance from "./axios";

const GetOrderAPI = (searchParam) => {
	return instance.get(`/order/owner?${searchParam}`);
};

export { GetOrderAPI };
