import instance from "./axios";

const GetOrderAPI = () => {
	return instance.get("/order/owner");
};

export { GetOrderAPI };
