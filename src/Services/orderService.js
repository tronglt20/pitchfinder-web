import axios from "../axios";

const GetOrderAPI = () => {
  return axios.get("/order/owner");
};

const GetCustomerAPI = () => {
  return axios.get("/order/owner/customer");
};

export { GetOrderAPI, GetCustomerAPI };
