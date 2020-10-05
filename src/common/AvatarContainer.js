import React from "react";
import PropTypes from "prop-types";
import { AvatarStyled } from "./styles";

const AvatarContainer = ({ strategy, mood, mode = "croped" }) => {
  const size = {
    full: 289,
    croped: 249,
  };
  console.log("mood");
  console.log(mood);
  return (
    <AvatarStyled style={{ height: size[mode] }}>
      <img src={mood} alt="" />
    </AvatarStyled>
  );
};

AvatarContainer.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default AvatarContainer;
