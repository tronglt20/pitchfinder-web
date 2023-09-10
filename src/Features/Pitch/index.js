import React, { useEffect } from "react";
import Header from "../../Components/ContentItemMaterials/header";
import PitchSearch from "./pitchSearch";
import PitchItem from "./pitchItem";
import AddButton from "./addButton";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import { pitchActions } from "../../Store/pitch";
import { GetPitchsAPI } from "../../Services/pitchService";
import { PitchTypeEnums } from "../../enum";

const Pitch = (props) => {
  useEffect(() => {
    var response = GetPitchsAPI();
    response.then((data) => {
      props.setPitchsState(data);
    });
  }, []);

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
        {props.pitchs.map((e, index) => (
          <PitchItem
            name={e.name}
            description={e.description}
            price={e.price}
            type={PitchTypeEnums[e.type]}
            status={e.status}
          />
        ))}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    pitchs: state.pitch.pitchs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPitchsState: (data) => dispatch(pitchActions.setPitchsState(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pitch);
