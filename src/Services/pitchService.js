import axios from "../axios";

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

export { GetPitchsAPI, AddPitchAPI };
