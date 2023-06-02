import React from "react";

const buttonStyles = {
  fontFamily: "Inter",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "42px",
  letterSpacing: "0em",
  textAlign: "left",
  margin: 0,
  marginBottom: "20px",
};

function Header(props) {
  return <h1 style={buttonStyles}>{props.content}</h1>;
}

export default Header;
