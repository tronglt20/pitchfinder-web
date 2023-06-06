import axios from "../axios";

const GetStoreAPI = () => {
  return axios.get("/pitch/store");
};

const GetPitchsAPI = () => {
  return axios.get("/pitch/store/pitchs");
};

const AddPitchAPI = (name, description, price, type) => {
  return axios.post("/pitch/store/pitchs", {
    name,
    description,
    price,
    type,
  });
};

export { GetStoreAPI, GetPitchsAPI, AddPitchAPI };
