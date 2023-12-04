import instance from "./axios";
import store from "./../Store/index";

const GetStoreAPI = () => {
	return instance.get("/pitch/store");
};

const GetPitchsAPI = () => {
	return instance.get("/pitch/store/pitchs");
};

const AddPitchAPI = (pitch) => {
	return instance.post("/pitch/store/pitchs", {
		...pitch,
		type: parseInt(pitch.type),
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
