import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import ToolTip from "../tooltip/index";
import images from "../../utils/images.json";

import MclGameOne from "./game-banner-one";
import MclGameTwo from "./game-banner-two";

const MclGame = () => {
  return (
    <>
      <MclGameOne />
      <MclGameTwo />
    </>
  );
};

export default MclGame;
