import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./style.scss";

const ToolTip = ({ icon, placement, content }) => {
  return (
    <>
      <OverlayTrigger
        key={placement}
        placement={placement}
        overlay={<Tooltip className="tooltip-text">{content}</Tooltip>}
      >
        <span>{icon}</span>
      </OverlayTrigger>
    </>
  );
};

export default ToolTip;
