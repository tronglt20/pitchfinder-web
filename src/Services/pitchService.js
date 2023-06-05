import axios from "../axios";

const GetPitchs = () => {
  return axios.get("/pitch/store/pitchs");
};

const AddPitch = (name, description, price, type) => {
  return axios.post("/pitch/store/pitchs", { name, description, price, type });
};

export { GetPitchs, AddPitch };
