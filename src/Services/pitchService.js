import instance from "./axios";

const GetStoreAPI = () => {
	return instance.get("/pitch/store");
};

const GetPitchsAPI = () => {
	return instance.get("/pitch/store/pitchs");
};

const AddPitchAPI = (name, description, price, type) => {
	return instance.post("/pitch/store/pitchs", {
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

	return instance.put("/pitch/store", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export { GetStoreAPI, GetPitchsAPI, AddPitchAPI, UpdateStoreAPI };
