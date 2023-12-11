import instance from "./axios";

const GetStoreAPI = () => {
	return instance.get("/pitch/store");
};

const GetPitchsAPI = () => {
	return instance.get("/pitch/store/pitchs");
};

const AddPitchAPI = (pitch, file) => {
	const formData = new FormData();
	formData.append("Name", pitch.name);
	formData.append("Type", pitch.type);
	formData.append("Description", pitch.description);
	formData.append("Price", pitch.price);
	formData.append("Formfiles", file);
	return instance.post("/pitch/store/pitchs", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

const UpdateStoreAPI = (store) => {
	const formData = new FormData();
	formData.append("Name", store.name);
	formData.append("Address", store.address);
	formData.append("PhoneNumber", store.phoneNumber);
	formData.append("Open", store.open);
	formData.append("Close", store.close);

	return instance.put("/pitch/store", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

const UpdatePitchAPI = (pitch) => {
	return instance.put(`/pitch/store/pitchs/${pitch.id}`, pitch);
};

export {
	GetStoreAPI,
	GetPitchsAPI,
	AddPitchAPI,
	UpdateStoreAPI,
	UpdatePitchAPI,
};
