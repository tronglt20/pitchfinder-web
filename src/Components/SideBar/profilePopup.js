import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { GetStoreAPI } from "../../Services/pitchService";
import { UpdateStoreAPI } from "../../Services/pitchService";
import { Box, Dialog, DialogContent, TextField, Button } from "@mui/material";

const ProfilePopup = (props) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [editedStore, setEditedStore] = useState(props.store);
	useEffect(() => {
		var response = GetStoreAPI();
		response.then((data) => {
			props.setStoreState(data);
		});
	}, []);

	const handleEdit = () => {
		setIsEditMode(true);
	};

	const handleSave = (e) => {
		e.preventDefault();
		setIsEditMode(false);
		console.log(editedStore);
		var response = UpdateStoreAPI(
			editedStore.name,
			editedStore.address,
			editedStore.phoneNumber,
			editedStore.open,
			editedStore.close
		);
		response.then((data) => {
			props.setStoreState(editedStore);
		});
	};

	const handleCancel = () => {
		setEditedStore(props.store);
		setIsEditMode(false);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedStore((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<Dialog
			open={props.isOpen}
			onClose={props.handleCloseDialog}
			PaperProps={{
				sx: {
					width: "591px",
					height: "598px",
					paddingX: "24px",
					paddingY: "36px",
				},
			}}
		>
			<DialogContent>
				<Typography
					sx={{
						fontSize: "32px",
						lineHeight: "130%",
						fontWeight: 700,
						marginBottom: "24px",
					}}
				>
					Store Profile
				</Typography>
				<Box
					sx={{
						display: "grid",
						gap: "16px",
						gridTemplateColumns: "1fr",
					}}
				>
					<TextField
						label="Name"
						value={isEditMode ? editedStore.name : props.store.name}
						fullWidth
						disabled={!isEditMode}
						name="name"
						onChange={handleInputChange}
					/>
					<TextField
						label="Address"
						value={isEditMode ? editedStore.address : props.store.address}
						fullWidth
						disabled={!isEditMode}
						name="address"
						onChange={handleInputChange}
					/>
					<TextField
						label="Phone Number"
						value={
							isEditMode ? editedStore.phoneNumber : props.store.phoneNumber
						}
						fullWidth
						disabled={!isEditMode}
						name="phoneNumber"
						onChange={handleInputChange}
					/>
					<TextField
						label="Opening Time"
						value={isEditMode ? editedStore.open : props.store.open}
						fullWidth
						disabled={!isEditMode}
						name="open"
						onChange={handleInputChange}
					/>
					<TextField
						label="Closing Time"
						value={isEditMode ? editedStore.close : props.store.close}
						fullWidth
						disabled={!isEditMode}
						name="close"
						onChange={handleInputChange}
					/>
					{!isEditMode ? (
						<Button
							variant="contained"
							onClick={handleEdit}
							sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}
						>
							Edit
						</Button>
					) : (
						<div>
							<Button
								variant="contained"
								onClick={handleSave}
								sx={{
									backgroundColor: "#4caf50",
									color: "#ffffff",
									marginRight: "8px",
								}}
							>
								Save
							</Button>
							<Button
								variant="outlined"
								onClick={handleCancel}
								sx={{ borderColor: "#4caf50", color: "#4caf50" }}
							>
								Cancel
							</Button>
						</div>
					)}
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default ProfilePopup;
