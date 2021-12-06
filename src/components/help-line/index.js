import React from "react";
import {RiQuestionnaireFill} from "react-icons/ri"
import "./style.scss";

const HelpLine = () => {
  return (
    <>
      <a href="javascript:void(0);" className="help-link">
          <RiQuestionnaireFill className="help-link-icon" />  Help Line
      </a>
    </>
  );
};

export default HelpLine;
