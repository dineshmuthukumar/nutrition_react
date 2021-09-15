import React from "react";
import "./style.scss";

const Tag = ({ text }) => {
  return <div className="tag border border-dark rounded-pill">{text}</div>;
};

export default Tag;
