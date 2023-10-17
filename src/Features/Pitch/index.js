import React, { useEffect, useState, useCallback } from "react";
import Header from "../../Components/ContentItemMaterials/header";
import PitchSearch from "./pitchSearch";
import { PitchItem } from "./pitchItem";
import { AddButton } from "./addButton";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import { pitchActions } from "../../Store/pitch";
import { GetPitchsAPI } from "../../Services/pitchService";
import { PitchTypeEnums } from "../../enum";

const Pitch = (props) => {
	const [responseData, setResponseData] = useState([]);

	const getData = useCallback(async () => {
		try {
			const response = await GetPitchsAPI();
			setResponseData(response.data);
		} catch (error) {
			console.log("Get Data from Order got error");
		}
	}, []);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<Box>
			<Header content="Pitch Management" />
			<PitchSearch />
			<Box
				sx={{
					marginTop: "30px",
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				<AddButton />
				{responseData.map((item, index) => (
					<PitchItem
						name={item?.name}
						description={item?.description}
						price={item?.price}
						type={PitchTypeEnums[item?.type]}
						status={item?.status}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Pitch;
