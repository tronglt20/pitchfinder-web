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

const UpdateStoreAPI = (name, address, phoneNumber, open, close) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("address", address);
  formData.append("phoneNumber", phoneNumber);
  formData.append("open", open);
  formData.append("close", close);

  return axios.put("/pitch/store", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { GetStoreAPI, GetPitchsAPI, AddPitchAPI, UpdateStoreAPI };
